import * as AuthService from "../services/auth.service.js";

export const signup = async (req: any, res: any) => {
  try {
    const user = await AuthService.signup(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const data = await AuthService.login(req.body);
    res.json(data);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export const getAllUsers = async (req: any, res: any) => {
  try {
    const users = await AuthService.getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};