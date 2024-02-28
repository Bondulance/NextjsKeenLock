import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_KEY) {
    return console.log("MISSING MONGO ENV VAR");
  }

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_KEY, {
      dbName: "KeenLock",
    });
  } catch (error) {
    console.log("MONGO DB IS NOT CONNECTED");
  }
};
