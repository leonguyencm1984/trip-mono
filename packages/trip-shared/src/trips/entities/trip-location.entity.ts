import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TripLocation {
  [x: string]: any;
  @PrimaryGeneratedColumn('uuid')
  id!: string;
}