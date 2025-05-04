import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PaymentInfo } from './payment-info.entity';

export enum PaymentDetailType {
  // Fill in your types
}

@Entity()
export class PaymentDetail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'enum', enum: PaymentDetailType, nullable: true })
  type!: PaymentDetailType;

  @Column()
  number!: string;

  @ManyToOne(() => PaymentInfo, paymentInfo => paymentInfo.payments)
  paymentInfo!: PaymentInfo;
}