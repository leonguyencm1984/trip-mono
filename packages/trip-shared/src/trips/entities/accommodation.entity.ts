import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Location } from './location.entity';
import { Merchant } from './merchant.entity';

export enum AccommodationType {
  // Fill in your types
}

@Entity('accommodations')
export class Accommodation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'enum', enum: AccommodationType, nullable: true })
  type!: AccommodationType;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column()
  numberOfBed!: number;

  @ManyToOne(() => Location)
  location!: Location;

  @ManyToOne(() => Merchant, merchant => merchant.hotels)
  merchant!: Merchant;
}