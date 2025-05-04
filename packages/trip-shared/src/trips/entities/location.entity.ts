import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  longitude!: string;

  @Column()
  latitude!: string;

  @Column()
  name!: string;
}