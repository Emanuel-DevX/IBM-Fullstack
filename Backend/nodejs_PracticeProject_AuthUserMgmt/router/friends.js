const express = require("express");

const router = express.Router();

let friends = {
  "johnsmith@gamil.com": {
    firstName: "John",
    lastName: "Doe",
    DOB: "22-12-1990",
  },
  "annasmith@gamil.com": {
    firstName: "Anna",
    lastName: "smith",
    DOB: "02-07-1983",
  },
  "peterjones@gamil.com": {
    firstName: "Peter",
    lastName: "Jones",
    DOB: "21-03-1989",
  },
};

// GET request: Retrieve all friends
router.get("/", (req, res) => {
  // Update the code here
  if (!friends) {
    return res.status(500).json({ msg: "No friends found!" });
  }

  res.send(friends); //This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email", (req, res) => {
  const email = req.params.email;
  if (!email) {
    return res.status(400).send("Invalid email");
  }
  try {
    res.status(200).json(friends[email]);
  } catch (err) {
    res
      .status(500)
      .send({ msg: "No friend found with the provided email", err: err });
  }
});

// POST request: Add a new friend
router.post("/", (req, res) => {
  const email = req.body.email;
  if (!email) {
    return res.status(400).send("Email adress required!");
  }
  if (friends[email]) {
    return res.status(400).send("A friend with this email already exists!");
  }
  try {
    const { firstName, lastName, DOB } = req.body;
    friends[email] = {
      firstName: firstName,
      lastName: lastName,
      DOB: DOB,
    };
    res.status(200).json(friends[email]);
  } catch (err) {
    res.status(500).json({ msg: "Could not add friend", err: err });
  }
});

// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let friend = friends[email];
  if (!friend) {
    return res.status(400).send("No friend found under the provided email");
  }
  try {
    let DOB = req.body.DOB;
    friend.DOB = DOB;
    res.send(`Friend with email ${email} updated`);
  } catch (err) {
    res.status(500).json({ msg: "Could not update friend!", err: err });
  }
});

// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  if (!email) {
    return res.status(400).send("Email required to delete a friend!");
  }
  delete friends[email];
  res.status(200).send(`Friend with email ${email} deleted`);
});

module.exports = router;
