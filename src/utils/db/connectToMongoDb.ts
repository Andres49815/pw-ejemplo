import mongoose, { connections } from "mongoose";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}

export const connectToMongoDb = async (connectionString: string): Promise<boolean> => {
  try {
    await mongoose.connect(connectionString, options);

    console.log('Connected to data base!');
    return true;
  }
  catch (error) {
    console.log((error as any).message);
    return false;
  }
}