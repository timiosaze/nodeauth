import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { authenticateUser } from "./middleware/authMiddleware.js";
// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // <- needed for HTML forms

//routers
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static(path.resolve(__dirname, "./public")));
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);

  res.json({ message: "data received", data: req.body });
});

//api
app.use(errorHandlerMiddleware);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

// app.use((req, res) => {
//   res.status(404).json({ msg: "Not Found" });
// });

// Global JSON error handler
// NOTE: keep all 4 args so Express recognizes this as an error handler
app.use((err, req, res, next) => {
  const status = err.statusCode || err.status || 500;

  // If your custom errors carry an array of messages (like from express-validator),
  // send the first one as the top-level msg to match your desired shape.
  const msg = Array.isArray(err.messages)
    ? err.messages[0]
    : err.message || "Something went wrong";

  // Always return JSON — no HTML
  res.status(status).json({ msg });
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5101;
if (!Number.isInteger(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const server = app.listen(port, "0.0.0.0", () => {
  console.log(`server is running on http://localhost:${port}`);
});

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

// Optional: nicer error messages
server.on("error", (err) => {
  if (/** @type {{ code?: string }} */ (err).code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use.`);
  } else {
    console.error(err);
  }
});
