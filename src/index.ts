import { connectToMongoDb, getSettingsByKey } from "./utils";
import httpServer from "./http-server/setupHttpServer";

const main = async () => {
  const mongoUrl = getSettingsByKey('MONGO_URL');
  if (!mongoUrl) {
    throw new Error('No mongo setting was set.  Please check the .env file.');
  }

  const connectedToDb = await connectToMongoDb(mongoUrl);
  if (connectedToDb) {
    const port = +(getSettingsByKey('PORT') ?? 3000);

    httpServer.listen(port, () => {
      console.log(`Application is now listening on port ${port}`);
    })
  }
  else {
    console.log('Not connected D:');
  }
};

main();

