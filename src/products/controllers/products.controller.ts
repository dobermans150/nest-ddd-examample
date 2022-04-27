import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateProductCommand } from '../commands/impl/CreateProduct';
import { ProductDto } from '../interfaces/product';

@Controller('products')
export class ProductsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  create(@Body() dto: ProductDto): void {
    const { name, _id, description, price } = dto;
    this.commandBus.execute(
      new CreateProductCommand(_id, name, price, description),
    );
  }
}
