"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const schemas_1 = require("@/schemas");
const bcrypt_1 = require("@/utils/bcrypt");
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await schemas_1.UserModal.findOne({ email }).select([
            "email",
            "username",
            "password",
        ]);
        if (user) {
            const isMatch = await (0, bcrypt_1.comparePassword)(password, user.password);
            if (!isMatch)
                throw new Error("unauthorized");
            res
                .status(200)
                .cookie("token", "loginSuccess", { httpOnly: true, sameSite: false })
                .json({ message: "user login successfully", success: true });
        }
        else {
            throw new Error("no user found");
        }
    }
    catch (error) {
        throw error;
    }
};
exports.login = login;
