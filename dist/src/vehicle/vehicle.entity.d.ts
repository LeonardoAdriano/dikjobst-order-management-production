import { BaseEntity } from 'typeorm';
import { VehicleClass } from './vehicle-class.entity';
export declare class Vehicle extends BaseEntity {
    id: string;
    registrationNumber: string;
    sortNumber: number;
    classes: VehicleClass[];
}
