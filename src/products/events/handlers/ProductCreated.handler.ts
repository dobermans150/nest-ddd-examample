import { BadRequestException } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { ProductRepositoryMongoService } from 'src/products/repository/services/product-repository-mongo.service';
import { ProductCreatedEvent } from '../impl/ProductCreated.event';

@EventsHandler(ProductCreatedEvent)
export class ProductCreatedHandler
  implements IEventHandler<ProductCreatedEvent>
{
  constructor(private readonly service: ProductRepositoryMongoService) {}

  async handle(event: ProductCreatedEvent) {
    console.log('hi im a event handler');
  }
}
