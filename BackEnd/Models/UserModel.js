import mongoose, { Schema } from "mongoose";

const schema =new Schema({
  username:String,
  password:String,
  session:String
});
const User=mongoose.model('users',schema);
export default User;