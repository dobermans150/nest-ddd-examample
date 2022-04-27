import { BadRequestException } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Product } from 'src/products/models/product.model';
import { ProductRepositoryMongoService } from 'src/products/repository/services/product-repository-mongo.service';
import { CreateProductCommand } from '../impl/CreateProduct';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(
    private readonly publisher: EventPublisher,
    private readonly service: ProductRepositoryMongoService,
  ) {}

  async execute(command: CreateProductCommand) {
    // logic
    const product = this.publisher.mergeObjectContext(
      await this.service.create(command),
    );

    product.CreateProduct();
    product.commit();

    /* Maybe a solution to my problem? */
    /* const product = this.publisher.mergeObjectContext(
      new Product(name, price, description),
    );

    product.CreateProduct();
    product.commit(); */
  }
}
