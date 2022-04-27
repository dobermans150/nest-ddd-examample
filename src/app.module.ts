import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { Enviroments } from './enviroments';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [DbModule, Enviroments.executeEnvConfig(), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
