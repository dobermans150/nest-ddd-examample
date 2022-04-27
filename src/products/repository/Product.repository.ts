import { ProductInterface } from '../interfaces/product';

export interface ProductRepository {
  create(product: ProductInterface): void;
}
