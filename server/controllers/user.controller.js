import { User } from "../models/user.model.js";
import  bcrypt from "bcrypt";
import { generateToken } from "../middleware/token.js";

export const signup = async function (req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const user = await User.findOne({email});

    if (user) {
      return res.status(401).json({
        message: "User already exist",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    await User.create({
      name,
      email,
      password:hashedPassword,
    });

    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error in signup" + error || error.message);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const signin = async function (req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email",
      });
    }

    if (!user.password) {
      return res.status(500).json({
        success: false,
        message: "User password is not set correctly in the database",
      });
    }

    const passwordAfterHashed = await bcrypt.compare(password, user.password);

    if (!passwordAfterHashed) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    // const token = await jwt.sign({
    //   userid : user._id
    // },process.env.JWT_USER_SECRET)

    generateToken(res, user, `Welcome back ${user.name}`);
  } catch (e) {
    console.log("Error in signin", e.message);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
