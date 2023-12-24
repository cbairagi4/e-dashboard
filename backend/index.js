 const express = require("express");
const mongoose = require("mongoose");
 const cors = require("cors");
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
app.use(cors()); 
const userRoutes = require('./routes/userRouter');
app.use('/routes', userRoutes); 

 
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
