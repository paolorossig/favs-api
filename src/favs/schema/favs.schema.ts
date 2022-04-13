import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FavsDocument = Favs & Document;

@Schema()
export class Favs {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  link: string;
}

export const FavsSchema = SchemaFactory.createForClass(Favs);
