import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Product } from 'src/products/models/product.model';
import { ProductRepository } from 'src/products/repository/Product.repository';
import { CreateProductCommand } from '../impl/CreateProduct';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: CreateProductCommand) {
    // logic
    const { _id, name, price, description } = command;

    const product = this.publisher.mergeObjectContext(
      new Product(_id, name, price, description),
    );

    product.CreateProduct();

    product.commit();
  }
}
