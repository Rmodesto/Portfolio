//function to contact form to the server
//the API to make a POST request to the
//"/api/contact" endpoint with the
//form data in the body of the request

//request header includes "Content-Type" and "Accept"
//set to "application/json". The function returns a Promise
//that resolves if the response is successful (status code 200
//rejects with an error message
//"Failed to send email" if the response is not successful.

export const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(() => {
    if (!res.ok) {
      throw new Error("Failed to send email.");
    }
  });
