const express = require("express");
const router = express.Router();

let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
  const test = "curl localhost:5000/user/";
  res.status(200).send(users);
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  const test = "curl localhost:5000/user/johnsmith@gamil.com";

  const user = users.filter((user) => user.email == req.params.email);
  res.status(200).send(user);
});

router.get("/lastName/:lastName", (req, res) => {
  const filtered = users.filter((user) => user.lastName == req.params.lastName);
  if (filtered) {
    return res.status(200).send(filtered);
  } else {
    return res
      .status(400)
      .send({ msg: `No user found with last name: ${req.params.lastName}` });
  }
});

// Function to convert a date string in the format "dd-mm-yyyy" to a Date object
function getDateFromString(strDate) {
  let [dd, mm, yyyy] = strDate.split("-");
  return new Date(yyyy + "/" + mm + "/" + dd);
}
// Define a route handler for GET requests to the "/sort" endpoint
router.get("/sort", (req, res) => {
  // Sort the users array by DOB in ascending order
  let sorted_users = users.sort(function (a, b) {
    let d1 = getDateFromString(a.DOB);
    let d2 = getDateFromString(b.DOB);
    return d1 - d2;
  });
  // Send the sorted_users array as the response to the client
  res.send(sorted_users);
});

// POST request: Create a new user
router.post("/", (req, res) => {
  const test =
    "curl --request POST 'localhost:5000/user?firstName=Jon&lastName=Lovato&email=jonlovato@theworld.com&DOB=10/10/1995'";
  const user = req.query;
  try {
    users.push(user);
    res.status(201).send(`New user aded: ${user.firstName}`);
  } catch (err) {
    res.status(500).send("User can not be added");
  }
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  const test =
    "curl --request PUT 'localhost:5000/user/johnsmith@gamil.com?DOB=1/1/1971'";
  let filteredUsers = users.filter((user) => user.email == req.params.email);
  if (!filteredUsers) {
    return res
      .status(404)
      .send(`Unable to find user with email: ${req.params.email}`);
  }
  let user = filteredUsers[0];
  let DOB = req.query.DOB;
  if (DOB) {
    user.DOB = DOB;
  }
  users = users.filter((user) => user.email != req.params.email);
  users.push(user);
  res
    .status(200)
    .send(`${user.firstName}'s DOB has been updated to ${user.DOB}`);
});

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  const test =
    "curl --request DELETE 'localhost:5000/user/johnsmith@gamil.com'";
  try {
    users = users.filter((user) => user.email != req.params.email);
    res
      .status(200)
      .send(`User with email ${req.params.email} has been deleted!`);
  } catch (err) {
    res.status(501).send({ msg: "Intenral server error", err: err });
  }
});

module.exports = router;
