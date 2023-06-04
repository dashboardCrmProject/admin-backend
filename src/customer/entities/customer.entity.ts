import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema  } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema({ strict: false })
export class Customer {
  @Prop({ type: MongooseSchema.Types.Mixed })
  body: Record<string, any>;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);