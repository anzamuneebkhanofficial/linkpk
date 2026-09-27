import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: process.env.FRONTURL,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }
));

app.get("/", (req, res) => {
    res.send(`Hello World! , ${process.env.FRONTURL}`);
});
app.get("/api", (req, res) => {
    res.json({ url: process.env.FRONTURL });
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});