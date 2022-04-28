import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from 'src/products/schemas/product.schema';
import { Product as ProductModel } from '../../models/product.model';
import { CreateProductDto } from '../../dtos/product.dto';
import { ProductRepository } from '../Product.repository';

@Injectable()
export class ProductRepositoryMongoService implements ProductRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}
  async create(payload: CreateProductDto): Promise<ProductModel> {
    try {
      const newProduct = new this.productModel(payload);
      const { name, price, description } = await newProduct.save();

      return new ProductModel(name, price, description);
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Product already exists');
      }
    }
  }
}
