const express = require("express");
const Message = require("../models/message");
const router = express.Router();

router.post("/message", (req, res) => {
  const { email, name, message } = req.body;

  if (!email || !name || !message) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  const saveMessage = new Message({ email, name, message });

  saveMessage
    .save()
    .then(() => {
      res.status(201).json({ message: "Message sent successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to send message" });
    });
});

module.exports = router;
