import * as AuthService from "../services/auth.service.js";

export const signup = async (req: any, res: any) => {
  const user = await AuthService.signup(req.body);
  res.json(user);
};

export const login = async (req: any, res: any) => {
  const data = await AuthService.login(req.body);
  res.json(data);
};