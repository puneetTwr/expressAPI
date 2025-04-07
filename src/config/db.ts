import mongoose from "mongoose";

const conenctDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err}`);
    process.exit(1);
  }
};

export default conenctDB;
