import express from "express";
import connectDB from "./db/db.js";

dotenv.config({ path: "./.env" });
connectDB();

const app = express();

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on port ${process.env.PORT || 8000}`);
});
