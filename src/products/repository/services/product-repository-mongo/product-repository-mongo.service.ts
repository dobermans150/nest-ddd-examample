import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/products/interfaces/product';
import { Product } from 'src/products/models/product.model';
import { ProductRepository } from '../../Product.repository';

@Injectable()
export class ProductRepositoryMongoService {
  create(prodcut: ProductDto) {
    // logic Store in mongo
  }
}
