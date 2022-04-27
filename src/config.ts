import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mongo: {
      dbName: process.env.MONGO_DB,
      host: process.env.MONGO_HOST,
      connection: process.env.MONGO_CONNECTION,
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD,
    },
  };
});
