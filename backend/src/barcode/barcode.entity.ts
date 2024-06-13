import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Barcode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;
}
