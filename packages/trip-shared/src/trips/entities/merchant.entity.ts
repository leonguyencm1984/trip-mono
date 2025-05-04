import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Location } from './location.entity';
import { Accommodation } from './accommodation.entity';

export enum MerchantType {
  // Fill in your types
}

@Entity()
export class Merchant {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'enum', enum: MerchantType, nullable: true })
  type!: MerchantType;

  @Column()
  name!: string;

  @ManyToOne(() => Location)
  location!: Location;

  @OneToMany(() => Accommodation, (accommodation: Accommodation) => accommodation.merchant)
  hotels!: Accommodation[];
}