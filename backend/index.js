import express from "express";
import mongoDb from "./db.js";

const app = express();
const PORT = 5001;

app.use(express.json());

// connect DB & load data
mongoDb();

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


