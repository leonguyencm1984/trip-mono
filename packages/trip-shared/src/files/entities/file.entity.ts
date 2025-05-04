import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: true })
  url?: string;
}