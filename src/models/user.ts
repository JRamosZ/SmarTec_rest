import {Entity, Column} from "typeorm";
import { BaseModel } from './base';


@Entity({ name: "users" })
export class User extends BaseModel {

  @Column()
  name!: string;

  @Column({unique: true})
  email!: string;

  @Column()
  password!: string;
}
