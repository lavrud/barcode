import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BarcodeService } from './barcode.service'
import { BarcodeController } from './barcode.controller'
import { Barcode } from './barcode.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Barcode])],
  providers: [BarcodeService],
  controllers: [BarcodeController],
})
export class BarcodeModule {}
