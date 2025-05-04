import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PaymentDetail } from './payment-detail.entity';

@Entity()
export class PaymentInfo {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => PaymentDetail, payment => payment.paymentInfo)
  payments!: PaymentDetail[];
}