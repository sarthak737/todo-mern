import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth.routes.js";
import { todoRouter } from "./routes/todo.routes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use("/auth", authRouter);
app.use("/todo", todoRouter);
export { app };
