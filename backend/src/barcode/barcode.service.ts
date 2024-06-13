import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Barcode } from './barcode.entity';

@Injectable()
export class BarcodeService {
  constructor(
    @InjectRepository(Barcode)
    private barcodeRepository: Repository<Barcode>,
  ) { }

  async create(code: string): Promise<Barcode> {
    const barcode = new Barcode();
    barcode.code = code;
    return this.barcodeRepository.save(barcode);
  }

  async findAll(): Promise<Barcode[]> {
    return this.barcodeRepository.find();
  }

  async update(id: number, code: string): Promise<Barcode> {
    const barcode = await this.barcodeRepository.findOne({ where: { id } });
    if (!barcode) {
      throw new NotFoundException(`Barcode with ID ${id} not found`);
    }
    barcode.code = code;
    return this.barcodeRepository.save(barcode);
  }

  async delete(id: number): Promise<void> {
    const result = await this.barcodeRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Barcode with ID ${id} not found`);
    }
  }
}
