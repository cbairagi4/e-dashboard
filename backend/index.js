 const express = require("express");
const mongoose = require("mongoose");
//  const cors = require("cors");
mongoose.connect("mongodb://localhost:27017/e-commerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const app = express(); 
app.use(express.json()); 
const User = require("./db/user");

app.post("/register", async (req, resp) => {
  try { 
    const newUser = new User(req.body); 
    await newUser.save(); 
    resp.send("User registered successfully!");
    console.log("User registered successfully!");
  } catch (error) {
    resp.status(500).send("Error registering user: " + error.message);
    console.error("Error registering user:", error);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
