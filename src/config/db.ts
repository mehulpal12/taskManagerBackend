// lib/db.ts
import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    isConnected = true;
    console.log("DB Connected");
  } catch (err) {
    console.error("DB Error:", err);
    throw err;
  }
};