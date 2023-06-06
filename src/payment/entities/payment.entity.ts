import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema  } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema({ strict: false })
export class Payment {
  @Prop({ type: MongooseSchema.Types.Mixed })
  body: Record<string, any>;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);