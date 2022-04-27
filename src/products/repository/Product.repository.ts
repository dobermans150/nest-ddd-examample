import { ProductDto } from '../interfaces/product';
import { Product } from '../models/product.model';

export interface ProductRepository {
  create(product: ProductDto): Promise<Product>;
}
