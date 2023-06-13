import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationModule } from './application/application.module';
import { PaymentModule } from './payment/payment.module';
import { ReconciliationModule } from './reconcilition/reconciliation.module';
import { UserModule } from './user/user.module';
import { BankModule } from './bank/bank.module';

@Module({
  imports: [
    CustomerModule,
    ApplicationModule,
    PaymentModule,
    ReconciliationModule,
    UserModule,
    BankModule,
    MongooseModule.forRoot('mongodb+srv://techdev1170:vEDpfxqNoxLoCaZc@cluster0.acqptz6.mongodb.net/'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
