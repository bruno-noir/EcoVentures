import mongoose from "mongoose";
import chalk from "chalk";

import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
import app from "./app.js";

process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

console.log('DATABASE:', process.env.DATABASE);
console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD);

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("DB connection successful!"))
  .catch(err => console.log(chalk.redBright(err)));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${chalk.greenBright(port)}...`);
});

process.on("unhandledRejection", err => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
