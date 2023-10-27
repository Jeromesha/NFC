import mongoose from "mongoose";
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import vCard from "./routes/BusinessCardRoutes/vCardRoutes.js";
import auth from "./routes/BusinessCardRoutes/authRoutes.js"
const app = express();


app.use(express.json());

app.use(cors());

config({
    path: "./.env",
});


const database = process.env.DATABASE;
const port = process.env.PORT;
mongoose
    .connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => {
        console.log("DB Connected");
    });

app.use("/vcard", vCard);
app.use("/auth", auth);

app.listen(port, () => {
    console.log("Connected");
});