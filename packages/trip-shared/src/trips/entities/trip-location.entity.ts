import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trip_locations')
export class TripLocation {
  [x: string]: any;
  @PrimaryGeneratedColumn('uuid')
  id!: string;
}