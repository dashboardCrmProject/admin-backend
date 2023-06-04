import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema  } from 'mongoose';

export type ApplicationDocument = Application & Document;

@Schema({ strict: false })
export class Application {
  @Prop({ type: MongooseSchema.Types.Mixed })
  body: Record<string, any>;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);