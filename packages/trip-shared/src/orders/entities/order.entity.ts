import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from '../../bookings/entities/booking.entity';
import { PaymentInfo } from '../../payments/entities/payment-info.entity';


@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => Booking, booking => booking.order)
  bookings!: Booking[];

  @OneToMany(() => PaymentInfo, paymentInfo => paymentInfo.order)
  paymentInfos!: PaymentInfo[];
}