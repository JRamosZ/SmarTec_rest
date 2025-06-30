import { AppDataSource } from "../config/data-source";
import { Vehicle } from "../models/vehicle";
import { Repository } from "typeorm";

export const vehicleRepository: Repository<Vehicle> = AppDataSource.getRepository(Vehicle);