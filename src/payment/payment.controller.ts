import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly PaymentService: PaymentService) {}

  @Post()
  create(@Body() createCustomerDto: any) {
    return this.PaymentService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.PaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PaymentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: any) {
    return this.PaymentService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PaymentService.delete(id);
  }
}
