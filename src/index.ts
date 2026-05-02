import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";

dotenv.config();

connectDB().then(() => console.log("db connected 2"));



app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.status(200).send("Backend is running successfully!");
});