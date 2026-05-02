import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signup = async (data: any) => {
  const { name, userName, fullName, email, password } = data;

  // Basic validation
  if (!email || !password || (!name && !userName && !fullName)) {
    throw new Error("Email, password, and a name are required");
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    userName: userName || name || email.split("@")[0],
    fullName: fullName || name || userName || "New User",
    email,
    password: hashedPassword,
  });


  // Remove password before returning
  const userObj = user.toObject();
  const { password: _password, ...safeUser } = userObj;

  return safeUser;
};

export const login = async (data: any) => {
  if (!data.email || !data.password) {
    throw new Error("email and password are required");
  }

  const user = await User.findOne({ email: data.email });
  if (!user || !user.password) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!);
  return { user, token };
};

export const getAllUsers = async () => {
  return await User.find({}, "userName email fullName _id").lean();
};
