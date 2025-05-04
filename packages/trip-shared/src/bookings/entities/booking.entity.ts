import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Location } from '../../trips/entities/location.entity';
import { Trip } from '../../trips/entities/trip.entity';
import { PaymentInfo } from '../../payments/entities/payment-info.entity';
import { Receipt } from '../../orders/entities/receipt.entity';
@Entity()
export class Booking {
  [x: string]: any;
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  receipt!: Receipt;

  @ManyToOne(() => Location)
  toLocation!: Location;

  @Column()
  ticket!: string;

  @Column()
  code!: string;

  @Column({ nullable: true })
  qrCode!: string; // Assuming Image is a string path or base64

  @ManyToOne(() => PaymentInfo)
  paymentInfo!: PaymentInfo;

  @ManyToOne(() => Trip, trip => trip.bookings)
  trip!: Trip;
}