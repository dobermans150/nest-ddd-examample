import { ProductDto } from 'src/products/interfaces/product';

export class ProductCreatedEvent {
  constructor(public readonly product: ProductDto) {}
}
