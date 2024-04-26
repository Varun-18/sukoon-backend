import { Request, Response } from "express";

import { UserModal } from "@/schemas";

import { comparePassword } from "@/utils/bcrypt";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await UserModal.findOne({ email }).select([
      "email",
      "username",
      "password",
    ]);

    if (user) {
      const isMatch = await comparePassword(password, user.password);

      if (!isMatch) throw new Error("unauthorized");

      res
        .status(200)
        .cookie("token", "loginSuccess", { httpOnly: true, sameSite: false })
        .json({ message: "user login successfully", success: true });
    } else {
      throw new Error("no user found");
    }
  } catch (error) {
    throw error;
  }
};
