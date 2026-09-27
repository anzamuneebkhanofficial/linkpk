import express from "express";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 3000;
const FRONTURL = (process.env.FRONTURL || "").replace(/\/$/, ""); // strip trailing slash
const app = express();

app.set("trust proxy", 1);
app.use(express.json());
app.use(cors(
    {
        origin: FRONTURL,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }
));

app.get("/", (req, res) => {
    res.send(`Hello World! , ${FRONTURL}`);
});
app.get("/api", (req, res) => {
    res.json({ url: FRONTURL });
});
// LOCAL + RENDER: app.listen() runs when file is executed directly (node index.js)
// VERCEL: Vercel imports this file as a module — listen() is skipped, export default is used
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}

export default app;