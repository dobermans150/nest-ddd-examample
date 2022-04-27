import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsController } from './controllers/products.controller';

import { CommandHandlers } from './commands/handlers';
import { EventsHandler } from './events/handlers';

import { ProductRepositoryMongoService } from './repository/services/product-repository-mongo.service';

import { ProductSchema, Product } from './schemas/product.schema';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [
    ProductRepositoryMongoService,
    ...CommandHandlers,
    ...EventsHandler,
  ],
})
export class ProductsModule {}
