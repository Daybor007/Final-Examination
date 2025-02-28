// const jwt = require('jsonwebtoken')

// const protect = async (req, res, next) => {
//   let token
  
//   if (req.headers.authorization?.startsWith('Bearer')) {
//     try {
//       token = req.headers.authorization.split(' ')[1]
//       const decoded = jwt.verify(token, process.env.JWT_SECRET)
//       req.user = await User.findById(decoded.id).select('-password')
//       next();
//     } catch (error) {
//       console.error('JWT Error:', error.message);
//       res.status(404).json({ message: 'Not authorized' })
//     }
//   }
  
//   if (!token) {
//     res.status(404).json({ message: 'Not authorized, no token' })
//   }
// };

// module.exports = protect 

const jwt = require("jsonwebtoken");
const User = require("../models/user"); // ✅ Make sure User is imported

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      next();
    } catch (error) {
      console.error("JWT Error:", error.message);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect }; // ✅ Exported as an object (named export)
