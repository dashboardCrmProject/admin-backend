import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { Bank, BankSchema } from './entities/bank.entity';


@Module({
  imports: [MongooseModule.forFeature([{ name: Bank.name, schema: BankSchema }])],
  controllers: [BankController],
  providers: [BankService],
})
export class BankModule {}
