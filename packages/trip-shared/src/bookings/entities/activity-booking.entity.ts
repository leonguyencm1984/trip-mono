import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ActivityBooking {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  field!: string; // Replace with actual type if needed

  @Column()
  startTime!: Date;

  @Column()
  endTime!: Date;
}