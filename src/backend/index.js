import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db/connect.js";
import routes from "./routes/routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Hello"));
app.use("/", routes);

async function start() {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT || 5000, () =>
      console.log("Server listening on port " + process.env.PORT)
    );
  } catch (e) {
    console.log(e.message);
  }
}

start();
