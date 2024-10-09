import { config } from "dotenv";

export const getSettingsByKey = (key: string): string | undefined => {
  const configuration = config();
  const { parsed } = configuration;

  if (!parsed) {
    throw new Error('No configuration found');
  }

  return parsed[key];
}