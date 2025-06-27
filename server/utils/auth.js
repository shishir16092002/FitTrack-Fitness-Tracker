const jwt = require("jsonwebtoken");
<<<<<<< HEAD
require("dotenv").config();
=======

const secret = "mysecretsdontmess";
>>>>>>> b1dbdded32eabbdea7a0431ba7696e40013c3e99
const expiration = "6h";

module.exports = {
  // function for our authenticated routes
  authMiddleware: function (req, res, next) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
<<<<<<< HEAD
      return res.status(401).json({ message: 'You have no token!' });
=======
      return res.status(400).json({ message: 'You have no token!' });
>>>>>>> b1dbdded32eabbdea7a0431ba7696e40013c3e99
    }

    // verify token and get user data out of it
    try {
<<<<<<< HEAD
      const { data } = jwt.verify(token, process.env.SECRET_KEY, { maxAge: expiration });
=======
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
>>>>>>> b1dbdded32eabbdea7a0431ba7696e40013c3e99
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
    next();
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

<<<<<<< HEAD
    return jwt.sign({ data: payload }, process.env.SECRET_KEY, { expiresIn: expiration });
=======
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
>>>>>>> b1dbdded32eabbdea7a0431ba7696e40013c3e99
  },
};
