import { ProductInterface } from '../interfaces/product';

import { Product as ProductModel } from '../models/product.model';

export interface ProductRepository {
  create(product: ProductInterface): Promise<ProductModel>;
}
