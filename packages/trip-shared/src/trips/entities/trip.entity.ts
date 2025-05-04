import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { TripLocation } from './trip-location.entity';
import { Receipt } from '../../orders/entities/receipt.entity';
import { Booking } from '../../bookings/entities/booking.entity';
import { FileEntity } from '../../files/entities/file.entity';

export enum TripStatusEnum {
  // Fill in your statuses
}

@Entity('trips')
export class Trip {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @ManyToOne(() => User, user => user.trips)
  creator!: User;

  @ManyToMany(() => User)
  @JoinTable()
  friends!: User[];

  @Column()
  startDate!: Date;

  @Column({ nullable: true })
  completedDate!: Date;

  @ManyToOne(() => Receipt, { nullable: true })
  receipt!: Receipt;

  @OneToMany(() => TripLocation, tripLocation => tripLocation.trip)
  locations!: TripLocation[];

  @OneToMany(() => Booking, booking => booking.trip)
  bookings!: Booking[];

  @Column({ type: 'enum', enum: TripStatusEnum, nullable: true })
  status!: TripStatusEnum;
}