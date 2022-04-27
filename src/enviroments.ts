import { DynamicModule } from '@nestjs/common';
import { ConfigFactory, ConfigModule, registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export class Enviroments {
  /* Env files */
  private static enviromentFiles = {
    dev: '.env',
    stag: '.stag.env',
    prod: '.prod.env',
  };

  public static readonly executeEnvConfig = (): DynamicModule => {
    return ConfigModule.forRoot({
      envFilePath: this.enviromentFiles[process.env.NODE_ENV] || ['.env'],
      load: [this.getEnvValuesJson()],
      isGlobal: true,
      validationSchema: this.getEnvSchema(),
    });
  };

  public static readonly getEnvValuesJson = (): ConfigFactory => {
    return registerAs('config', () => {
      return {
        mongo: {
          dbName: process.env.DB_NAME,
          host: process.env.MONGO_HOST,
          connection: process.env.MONGO_CONNECTION,
          user: process.env.MONGO_INITDB_ROOT_USERNAME,
          password: process.env.MONGO_INITDB_ROOT_PASSWORD,
        },
      };
    });
  };

  public static readonly getEnvSchema = (): Joi.ObjectSchema => {
    return Joi.object({
      mongo: Joi.object({
        dbName: Joi.string().required(),
        host: Joi.string().required(),
        connection: Joi.string().required(),
        user: Joi.string().required(),
        password: Joi.string().required(),
      }),
    });
  };
}
