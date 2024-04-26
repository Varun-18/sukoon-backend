"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const schemas_1 = require("schemas");
const register = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = await new schemas_1.UserModal({
            email,
            username,
            password,
        }).save();
        if (!user)
            throw new Error("something went wrong please try again later..!!");
        res.status(200).json({ ...user });
    }
    catch (error) {
        throw error;
    }
};
exports.register = register;
