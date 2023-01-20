import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import db from "./config/database.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

db.connect(function(err) {
    if (err) throw err;
    else{
      console.log("connected");
    };
  });

app.use(express.json());
app.use("/", AuthRoute);
app.use("/", UserRoute);

app.listen(process.env.APP_PORT, () => {
    console.log("Server Running on port ",process.env.APP_PORT);
});