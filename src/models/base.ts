import {PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity as TypeOrmBaseEntity} from "typeorm";

export abstract class BaseModel extends TypeOrmBaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @CreateDateColumn({name: "created_at"})
  createdAt!: Date;

  @UpdateDateColumn({name: "updated_at"})
  updatedAt!: Date;
}
