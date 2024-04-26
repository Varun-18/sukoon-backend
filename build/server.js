"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("@/routes");
const middleware_1 = require("@/middleware");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use("/", routes_1.router);
app.use(middleware_1.errorHandler); // common error handler
app.listen(process.env.PORT || 8080, async () => {
    await mongoose_1.default.connect(process.env.MONGO_CONNECTION_STRING || "");
    console.log(`Mongo connection successful server running on http://localhost:${process.env.PORT || 8080}`);
});
