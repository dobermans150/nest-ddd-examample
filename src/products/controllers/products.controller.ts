import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateProductCommand } from '../commands/impl/CreateProduct';

import { CreateProductDto } from '../dtos/product.dto';
@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  create(@Body() dto: CreateProductDto) {
    const { name, description, price } = dto;
    return this.commandBus.execute(
      new CreateProductCommand(name, price, description),
    );
  }
}
