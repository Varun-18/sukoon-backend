import { NextFunction, Request, Response } from "express";
import { UserModal } from "@/schemas";

export const checkExistingUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password } = req.body;
  try {
    if (!email || !username || !password)
      throw new Error("all the field are required");

    const user = await UserModal.findOne({ email });

    if (user) throw new Error("user already exists");

    next();
  } catch (error) {
    next(error);
  }
};
