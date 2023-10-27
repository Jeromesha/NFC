import { verify } from 'jsonwebtoken';
import { findById } from '../model/UserModel.js'; 


const authorizeUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - Token missing' });
    }

    
    verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
      }

      const user = await findById(decoded.id);

      if (!user || user.role !== 'user') {
        return res.status(403).json({ message: 'Forbidden - User role required' });
      }

      req.user = user; 
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


const authorizeAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - Token missing' });
    }


    verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
      }

      const user = await findById(decoded.id);

      if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden - Admin role required' });
      }

      req.user = user; 
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { authorizeUser, authorizeAdmin };
