import { PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class Receipt {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
}