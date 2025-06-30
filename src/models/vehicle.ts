import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {BaseModel} from "./base";

@Entity({name: "vehicles"})
export class Vehicle extends BaseModel {
  @Column()
  make!: string;

  @Column()
  model!: string;

  @Column()
  year!: number;

  @Column()
  vin!: string;

  @Column()
  serialNumber!: string;

  @Column({nullable: true})
  description?: string;
}
