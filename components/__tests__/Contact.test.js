import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { sendContactForm } from "../../lib/api";
import Contact from "../Contact";

jest.mock("../../lib/api", () => ({
  sendContactForm: jest.fn(),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useRef: jest.fn(),
}));

jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn(() => [{}, true]),
}));

jest.mock("next/dynamic", () => () => {
  return function DynamicComponent() {
    return <div></div>;
  };
});

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...rest }) => <div {...rest}>{children}</div>,
    input: ({ children, whileHover, whileTap, ...rest }) => (
      <input {...rest}>{children}</input>
    ),
    textarea: ({ children, whileHover, whileTap, ...rest }) => (
      <textarea {...rest}>{children}</textarea>
    ),
    button: ({ children, whileHover, whileTap, ...rest }) => (
      <button {...rest}>{children}</button>
    ),
  },
}));

it("renders Contact component", () => {
  render(<Contact />);
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Subject")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});

it("handles form submission", async () => {
  render(<Contact />);

  const emailInput = screen.getByPlaceholderText("Email");
  const nameInput = screen.getByPlaceholderText("Name");
  const subjectInput = screen.getByPlaceholderText("Subject");
  const messageInput = screen.getByPlaceholderText("Message");
  const submitButton = screen.getByRole("button", { name: /submit/i });

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(nameInput, { target: { value: "Test Name" } });
  fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
  fireEvent.change(messageInput, { target: { value: "Test Message" } });

  sendContactForm.mockResolvedValueOnce();

  await act(async () => {
    fireEvent.click(submitButton);
  });

  await waitFor(() => {
    expect(sendContactForm).toHaveBeenCalledWith({
      name: "Test Name",
      email: "test@example.com",
      subject: "Test Subject",
      message: "Test Message",
    });
  });

  expect(screen.queryByText(/Form submission failed!/i)).toBeNull();
});

it("handles form submission failure", async () => {
  render(<Contact />);

  const emailInput = screen.getByPlaceholderText("Email");
  const nameInput = screen.getByPlaceholderText("Name");
  const subjectInput = screen.getByPlaceholderText("Subject");
  const messageInput = screen.getByPlaceholderText("Message");
  const submitButton = screen.getByRole("button", { name: /submit/i });

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(nameInput, { target: { value: "Test Name" } });
  fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
  fireEvent.change(messageInput, { target: { value: "Test Message" } });

  const error = new Error();
  error.message = "Form submission failed!";
  sendContactForm.mockRejectedValueOnce(error);

  await act(async () => {
    fireEvent.click(submitButton);
  });

  await waitFor(() => {
    expect(sendContactForm).toHaveBeenCalledWith({
      name: "Test Name",
      email: "test@example.com",
      subject: "Test Subject",
      message: "Test Message",
    });
  });

  expect(screen.getByText(/Form submission failed!/i)).toBeInTheDocument();
});
