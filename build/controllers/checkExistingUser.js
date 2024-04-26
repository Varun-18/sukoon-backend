"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExistingUser = void 0;
const schemas_1 = require("@/schemas");
const checkExistingUser = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        if (!email || !username || !password)
            throw new Error("all the field are required");
        const user = await schemas_1.UserModal.findOne({ email });
        if (user)
            throw new Error("user already exists");
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.checkExistingUser = checkExistingUser;
