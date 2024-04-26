import { Router } from "express";

import { checkExistingUser, login, register } from "@/controllers";

const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", checkExistingUser, register);

export { userRouter };
