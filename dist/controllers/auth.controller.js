import * as AuthService from "../services/auth.service.js";
export const signup = async (req, res) => {
    const user = await AuthService.signup(req.body);
    res.json(user);
};
export const login = async (req, res) => {
    const data = await AuthService.login(req.body);
    res.json(data);
};
//# sourceMappingURL=auth.controller.js.map