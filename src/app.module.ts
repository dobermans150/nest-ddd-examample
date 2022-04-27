import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { Enviroments } from './enviroments';

@Module({
  imports: [DbModule, Enviroments.executeEnvConfig()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
