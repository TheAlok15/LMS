import mongoose from "mongoose";

 const connectDb = async () => {
  try
    {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Mongo connected");
    }
  catch(e)
    {
      console.log("error in db",e.message);
    }
}

export default connectDb;