import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { ProductsController } from './controllers/products.controller';
import { EventsHandler } from './events/handlers';
import { ProductRepositoryMongoService } from './repository/services/product-repository-mongo/product-repository-mongo.service';

@Module({
  imports: [CqrsModule],
  controllers: [ProductsController],
  providers: [
    ProductRepositoryMongoService,
    ...CommandHandlers,
    ...EventsHandler,
  ],
})
export class ProductsModule {}
