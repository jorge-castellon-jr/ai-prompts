import mongoose from "mongoose";

let is_connected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (is_connected) {
    console.log("Already connected to DB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "ai_prompts",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    is_connected = true;
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting to DB");
    console.log(error);
  }
};
