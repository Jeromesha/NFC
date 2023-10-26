// import app from "./app.js";
import mongoose from "mongoose";
import { config } from "dotenv";
import express, { json } from "express";
import cors from "cors";
import vCard from "./routes/BusinessCardRoutes/vCardRoutes.js";

const app = express();
app.use(cors());
// connect is used to connect DB
const { connect } = mongoose;

config({
    path: "./.env",
});

const database = process.env.DATABASE;
const port = process.env.PORT;

connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((res) => {
    console.log("DB Connected");
});

app.use("/vcard", vCard);


app.listen(port, () => {
    console.log("Connected");
});