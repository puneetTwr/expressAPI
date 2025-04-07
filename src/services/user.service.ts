import User from "../models/User.model";

export const getAllUsers = async() => {
  return await User.find();
};

export const createUser = async(name: string, email?: string) => {
  const user = new User({ name, email });
  return user.save();
};
