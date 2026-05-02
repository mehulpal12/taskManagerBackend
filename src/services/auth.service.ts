import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signup = async (data: any) => {
  console.log(data)
  const { name, email, password } = data;

  // Basic validation
  if (!name || !email || !password) {
    throw new Error("name, email and password are required");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user (only required fields)
  const user = await User.create({
        userName : name,
        email,
        password: hashedPassword,
        fullName : name
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


