export const dummyData = {
  validData: {
    name: "John Doe",
    email: "john.doe@example.com",
    subject: "Testing",
    message: "This is a test message.",
  },
  emptyField: {
    name: "",
    email: "john.doe@example.com",
    subject: "Testing",
    message: "This is a test message.",
  },
  invalidEmail: {
    name: "John Doe",
    email: "invalid email",
    subject: "Testing",
    message: "This is a test message.",
  },
  invalidName: {
    name: "John123",
    email: "john.doe@example.com",
    subject: "Testing",
    message: "This is a test message.",
  },
  specialCharacters: {
    name: "John Doe",
    email: "john.doe@example.com",
    subject: "Test!ng",
    message: "This is a test message.",
  },
};
