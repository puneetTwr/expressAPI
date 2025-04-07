import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return;
  }

  try {
    const newUser = await registerUser(username, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const { token } = await loginUser(username, password);
    res.status(200).json({ token });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};
