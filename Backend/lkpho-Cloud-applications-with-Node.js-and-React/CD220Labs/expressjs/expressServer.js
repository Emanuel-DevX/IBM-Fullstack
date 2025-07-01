// Import the Express.js library
const express = require("express");

// Create an instance of an Express application
const app = new express();

// Initialize an array to store login details
let loginDetails = [];

// Define the root route to send a welcome message
app.get("/", (req, res) => {
  res.send("Welcome to the express server");
});

// Define a route to send login details as a JSON string
app.get("/loginDetails", (req, res) => {
  res.send(JSON.stringify(loginDetails));
});

// Define a route to handle login requests and store login details
app.post("/login/:name", (req, res) => {
  loginDetails.push({ name: req.params.name, login_time: new Date() });
  res.send(req.params.name + ", You are logged in!");
});

// Define a dynamic route to greet users by name
app.get("/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

app.get("/month/:id", (req, res) => {
  try {
    if (req.params.id < 1 || req.params.id > 12)
      res.status(400).send({ message: "Invalid month number!" });

    return res.status(200).send(months[req.params.id]);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error", err: err });
  }
});

// Start the server and listen on port 3333
app.listen(3333, () => {
  console.log(`Listening at http://localhost:3333`);
});
