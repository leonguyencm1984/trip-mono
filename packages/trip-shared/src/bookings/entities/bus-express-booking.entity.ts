import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Location } from '../../trips/entities/location.entity';

@Entity('bus_express_bookings')
export class BusExpressBooking {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  field!: string; // Replace with actual type if needed

  @ManyToOne(() => Location)
  fromLocation!: Location;
}