import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

dotenv.config();

connectDB().then(() => console.log("db connected 2"));



export default async function handler(req: any, res: any) {
  await connectDB();
  return app(req, res);
}