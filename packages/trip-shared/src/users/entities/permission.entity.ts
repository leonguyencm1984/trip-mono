import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum PermissionEnum {
  // Fill in your permissions
}

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  permission_name!: string;

  @Column({ type: 'enum', enum: PermissionEnum, nullable: true })
  permission_enum!: PermissionEnum;
}