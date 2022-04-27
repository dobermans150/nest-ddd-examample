import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsPositive,
  IsString,
} from 'class-validator';
import { ProductInterface } from '../interfaces/product';

export class CreateProductDto implements ProductInterface {
  /*   @ApiProperty({})
  @IsMongoId()
  _id: string; */

  @ApiProperty({ maxLength: 32, required: true, description: 'Product name' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    maxLength: 124,
    required: true,
    description: 'Product Description',
  })
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({
    maximum: 999999,
    required: true,
    description: 'Product Price',
  })
  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;
}
