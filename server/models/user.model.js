import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema  = new Schema({
  name:{type:String, require:true },
  email:{type:String, require:true },
  password:{type:String, require:true },
  role:{type:String, enum:["instructor", "student"], default:"student" },
  enrolledCourses:[{type:ObjectId, ref:"Course" }],
  profilePic:{type:String, default:"" }
},{timestamps:true})
export const User = mongoose.model("User", userSchema)