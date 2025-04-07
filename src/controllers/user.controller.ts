import { Request, Response } from "express";
import { getAllUsers, createUser } from "../services/user.service";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await getAllUsers();
  res.json(users);
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body;
  if (!name) res.status(400).json({ error: "Name is required" });

  const newUser = await createUser(name);
  res.status(201).json(newUser);
};
