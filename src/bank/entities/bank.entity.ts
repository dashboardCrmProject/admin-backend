import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema  } from 'mongoose';

export type BankDocument = Bank & Document;

@Schema({ strict: false })
export class Bank {
  @Prop({ type: MongooseSchema.Types.Mixed })
  body: Record<string, any>;
}

export const BankSchema = SchemaFactory.createForClass(Bank);