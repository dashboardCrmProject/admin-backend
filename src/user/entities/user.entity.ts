import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Schema as MongooseSchema  } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ strict: false })
export class User {
  @Prop({ type: MongooseSchema.Types.Mixed })
  body: Record<string, any>;
}

export const UserSchema = SchemaFactory.createForClass(User);