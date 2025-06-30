import {DataSource} from "typeorm";
import {dbConfig} from "./db";
import {User} from "../models/user";
import {Vehicle} from "../models/vehicle";

export const AppDataSource = new DataSource({
  ...dbConfig,
  type: "postgres",
  username: dbConfig.user,
  entities: [User, Vehicle],
  synchronize: true, // For development only, for production use migrations
});
