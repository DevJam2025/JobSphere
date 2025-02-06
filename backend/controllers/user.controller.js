import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  // logic for user regisster
  console.log('Request body:', req.body); // Log the request body

  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing!",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({
      message: "Account created succesfully.",
      success: true,
    });
  } catch (error) {
    console.error("Error during registration:", error); // Log the full error
    return res.status(500).json({
      message: "An unexpected error occurred.",
      success: false,
      error: error.message,
    });
  }
  
};
export const login = async (req, res) => {
  // logic for user login
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Email, password, and role are required.",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }
    // check if the role is correct
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with this role.",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        success: true,
      });
  } catch (error) {
    return res.status(500).json({
      message: "An unexpected error occurred.",
      success: false,
      error: error.message,
    });
  }
  
};
export const logout = async (req, res) => {
  // logic for loging out
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logged out succesfully.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An unexpected error occurred.",
      success: false,
      error: error.message,
    });
  }
  
};
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;
    if (!fullname || !email || !phoneNumber || !bio || !skills) {
      return res.status(400).json({
        message: "Something is missing!",
        success: false,
      });
    }
    // cloudinary

    const skillsArray = skills.split(",");
    const userId = req.id; // middleware authentication
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "Oops! User not found.",
        success: false,
      });
    }
    // updateing user data
    (user.fullname = fullname),
      (user.email = email),
      (user.phoneNumber = phoneNumber),
      (user.profile.bio = bio),
      (user.profile.skills = skillsArray),
      
    // resume shall come here later!

    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res.status(200).json({
        message: "Woohoo! Profile updated succesfully.",
        user,
        success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An unexpected error occurred.",
      success: false,
      error: error.message,
    });
  }
  
};
