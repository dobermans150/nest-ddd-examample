import { Test, TestingModule } from '@nestjs/testing';
import { ProductRepositoryMongoService } from './product-repository-mongo.service';

describe('ProductRepositoryMongoService', () => {
  let service: ProductRepositoryMongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductRepositoryMongoService],
    }).compile();

    service = module.get<ProductRepositoryMongoService>(ProductRepositoryMongoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
