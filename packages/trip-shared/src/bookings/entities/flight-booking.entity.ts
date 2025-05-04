import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Location } from '../../trips/entities/location.entity';

@Entity()
export class FlightBooking {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  flightNumber!: string;

  @Column()
  departureTime!: Date;

  @Column()
  landingDate!: Date;

  @ManyToOne(() => Location)
  fromLocation!: Location;

  @Column()
  totalTime!: number;
}