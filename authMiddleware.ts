const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('./models/user');

const generateToken = (user: any) => {
  const payload = {
    user: {
      id: user.id,
      role: user.role
    }
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const authenticateUser = async (req: any, res:any, next: any) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.user.id);
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Authentication failed' });
  }
};

const authorizeUser = (role: any) => (req: any, res: any, next: any) => {
  if (req.user.role !== role) {
    res.status(403).send({ error: 'Authorization failed' });
  } else {
    next();
  }
};

const validateData = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { generateToken, authenticateUser, authorizeUser, validateData };