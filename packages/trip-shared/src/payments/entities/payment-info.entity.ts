import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PaymentDetail } from './payment-detail.entity';

@Entity('payment_infos')
export class PaymentInfo {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => PaymentDetail, payment => payment.paymentInfo)
  payments!: PaymentDetail[];
}