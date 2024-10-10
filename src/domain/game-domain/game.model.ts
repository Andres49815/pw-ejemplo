import mongoose, { Schema } from "mongoose";
import { GameWithId } from "./game.interface";

const GameSchema: Schema = new Schema({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    console: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  });
  
  // Export the Mongoose model for User
  const GameModel = mongoose.model<GameWithId>('Game', GameSchema);
  
  export default GameModel;