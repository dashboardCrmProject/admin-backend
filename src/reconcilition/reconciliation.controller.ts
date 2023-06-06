import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReconciliationService } from './reconciliation.service';

@Controller('reconciliation')
export class ReconciliationController {
  constructor(private readonly ReconciliationService: ReconciliationService) {}

  @Post()
  create(@Body() createCustomerDto: any) {
    return this.ReconciliationService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.ReconciliationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ReconciliationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: any) {
    return this.ReconciliationService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ReconciliationService.delete(id);
  }
}
