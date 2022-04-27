import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { ProductInterface } from '../interfaces/product';

@Schema()
export class Product extends Document implements ProductInterface {
  @Prop({
    Types: String,
    required: true,
    maxlength: 32,
    trim: true,
    unique: true,
  })
  name: string;

  @Prop({ types: String, required: true, maxlength: 124, trim: true })
  description: string;

  @Prop({ type: Number, required: true, max: 999999, min: 0 })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
