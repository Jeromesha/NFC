
import { Router } from "express";
import { signup , login ,update} from '../../controller/authController.js';
const router = Router();

// import { authorizeUser, authorizeAdmin } from '../../middleware/authorization';



router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/update-password").post(update);

// router.get('/user-profile', authorizeUser, (req, res) => {
//   res.json({ message: 'User profile', user: req.user });
// });

// router.get('/admin-dashboard', authorizeAdmin, (req, res) => {
//   res.json({ message: 'Admin dashboard', user: req.user });
// });

export default router;
