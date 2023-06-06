import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReconciliationController } from './reconciliation.controller';
import { Reconciliation, ReconciliationSchema } from './entities/reconciliation.entity';
import { ReconciliationService } from './reconciliation.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Reconciliation.name, schema: ReconciliationSchema }])],
  controllers: [ReconciliationController],
  providers: [ReconciliationService],
})
export class ReconciliationModule {}
