import express from "express";
import {login,register,updateProfile,logout} from "../controllers/user.controller.js";
import isAuthenticated from "../middleswares/isAuthenticated.js";

const router=express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;
