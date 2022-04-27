import { AggregateRoot } from '@nestjs/cqrs';
import { ProductCreatedEvent } from '../events/impl/ProductCreated.event';

export class Product extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly name: string,
    private readonly price: number,
    private readonly description: string,
  ) {
    super();
  }

  CreateProduct() {
    const product = {
      name: this.name,
      price: this.price,
      description: this.description,
    };

    this.apply(new ProductCreatedEvent(product));
  }
}
