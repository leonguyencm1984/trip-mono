import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Roles } from './role.entity';
import { PaymentInfo } from '../../payments/entities/payment-info.entity';
import { Trip } from '../../trips/entities/trip.entity';
import { FileEntity } from '../../files/entities/file.entity';

export enum Status {
  // Fill in your statuses
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  user_name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  user_password!: string;

  @Column({ nullable: true })
  fullName!: string;

  @Column({ nullable: true })
  lastName!: string;

  @Column({ nullable: true })
  firstName!: string;

  @Column({ nullable: true })
  previousPassword!: string;

  @OneToMany(() => Trip, trip => trip.creator)
  trips!: Trip[];

  @Column({ nullable: true })
  roleId!: number;

  @ManyToOne(() => PaymentInfo)
  paymentInfo!: PaymentInfo;

  @Column({ type: 'enum', enum: Status, nullable: true })
  status!: Status;

  @Column({ nullable: true })
  hash!: string;

  @Column({ nullable: true })
  createdAt!: Date;

  @Column({ nullable: true })
  updatedAt!: Date;
}