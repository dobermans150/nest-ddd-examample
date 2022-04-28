import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { ProductCreatedEvent } from '../impl/ProductCreated.event';

@EventsHandler(ProductCreatedEvent)
export class ProductCreatedHandler
  implements IEventHandler<ProductCreatedEvent>
{
  constructor() {}

  async handle(event: ProductCreatedEvent) {
    // logic
    console.log('hi im a event handler');
  }
}
