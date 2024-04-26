import { Request, Response } from "express";
import { UserModal } from "schemas";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    const user = await new UserModal({
      email,
      username,
      password,
    }).save();

    if (!user)
      throw new Error("something went wrong please try again later..!!");

    res.status(200).json({ ...user });
  } catch (error) {
    throw error;
  }
};
