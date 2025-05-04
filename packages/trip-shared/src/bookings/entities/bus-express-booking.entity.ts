import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Location } from '../../trips/entities/location.entity';

@Entity()
export class BusExpressBooking {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  field!: string; // Replace with actual type if needed

  @ManyToOne(() => Location)
  fromLocation!: Location;
}