import mongoose, { Schema } from "mongoose";
import { UserWithId } from "./user.interface";

const UserSchema: Schema = new Schema({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: true,
    },
  });
  
  // Export the Mongoose model for User
  const UserModel = mongoose.model<UserWithId>('User', UserSchema);
  
  export default UserModel;