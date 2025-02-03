import express from "express";
import { register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middleswares/isAuthenticated.js";
import { login,logout } from "../controllers/user.controller.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;