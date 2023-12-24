

const User = require("../models/userModel"); 
 
module.exports.getUser = async (req, resp) => {
    
    try {  
        const { email, password } = req.body; 
        const user = await User.findOne({ email, password });
    
        if (user) { 
          resp.status(200).json({ status:200, message: "Login successful", user });
        } else { 
          resp.status(404).json({ message: "User not found or incorrect credentials" });
        }
      } catch (error) { 
        resp.status(500).send("Error logging in: " + error.message);
        console.error("Error logging in:", error);
      }
}
 
module.exports.addUser = async (req, resp) => { 
    try { 
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        resp.status(404).json({ message: "User already registered" });  
      } else { 
        const newUser = new User(req.body);  
      if (newUser) { 
        await newUser.save(); 
        resp.send(req.body); 
        resp.status(200).json({ message: "Login successful", newUser });
      } else { 
        resp.status(404).json({ message: "incorrect credentials" });
      } 
      } 
    } catch (error) {
      resp.status(500).send("Error registering user: " + error.message);
      console.error("Error registering user:", error);
    }
  };
  