import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { router } from "@/routes";
import { errorHandler } from "@/middleware";

const app = express();

dotenv.config();

app.use(
  cors({
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/", router);

app.use(errorHandler); // common error handler

app.listen(process.env.PORT || 8080, async () => {
  await mongoose.connect(process.env.MONGO_CONNECTION_STRING || "");
  console.log(
    `Mongo connection successful server running on http://localhost:${
      process.env.PORT || 8080
    }`
  );
});
