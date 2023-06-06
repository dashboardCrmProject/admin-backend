import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema  } from 'mongoose';

export type ReconciliationDocument = Reconciliation & Document;

@Schema({ strict: false })
export class Reconciliation {
  @Prop({ type: MongooseSchema.Types.Mixed })
  body: Record<string, any>;
}

export const ReconciliationSchema = SchemaFactory.createForClass(Reconciliation);