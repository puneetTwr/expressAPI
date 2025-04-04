import morgan from "morgan";
import { Request, Response } from "express";

const logger = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  {
    stream: {
      write: (message) => console.log(message.trim()),
    },
  }
);

export default logger;
