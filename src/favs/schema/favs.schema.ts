import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schema/user.schema';

export type FavsDocument = Favs & Document;

export interface Fav {
  title: string;
  description: string;
  link: string;
}

@Schema({ timestamps: true })
export class Favs {
  @Prop({ required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop()
  list: Fav[];
}

export const FavsSchema = SchemaFactory.createForClass(Favs);
