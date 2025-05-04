import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Permission } from './permission.entity';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  role_name!: string;

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions!: Permission[];
}