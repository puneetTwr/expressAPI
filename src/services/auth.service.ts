import bcrypt from "bcryptjs";
import jwt, { Secret, SignOptions } from "jsonwebtoken";
import User, { IUser } from "../models/User.model";

const JWT_SECRET: Secret = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = parseInt(process.env.JWT_EXPIRES_IN || "3600", 10);

export const registerUser = async (
  username: string,
  password: string,
  email?: string
): Promise<IUser> => {
  const existing = await User.findOne({ username });
  if (existing) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  return user.save();
};

export const loginUser = async (
  username: string,
  password: string
): Promise<{ token: string }> => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("User not found");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  const payload = { id: user, username };

  const token = jwt.sign({ id: user._id, username }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return { token };
};
