"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("@/controllers");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post("/login", controllers_1.login);
userRouter.post("/register", controllers_1.checkExistingUser, controllers_1.register);
