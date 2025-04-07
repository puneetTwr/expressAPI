import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import logger from "./middlewares/logger.middleware";
import routes from "./routes/index";
import connectDB from "./config/db";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger);

app.use("/api", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
