import { Controller, Post, Body, Get, Patch, Delete, Param } from '@nestjs/common'
import { BarcodeService } from './barcode.service'

@Controller('barcode')
export class BarcodeController {
  constructor(private readonly barcodeService: BarcodeService) {}

  @Post()
  async create(@Body('code') code: string) {
    return this.barcodeService.create(code)
  }

  @Get()
  async findAll() {
    return this.barcodeService.findAll()
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body('code') code: string) {
    return this.barcodeService.update(id, code)
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.barcodeService.delete(id)
  }
}
