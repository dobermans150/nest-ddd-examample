import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";

import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  /* Swagger */
  const config = new DocumentBuilder()
    .setTitle("Big Store API")
    .setDescription("Big store")
    .setVersion("1.0")
    .addTag("store")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  app.enableCors();

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
