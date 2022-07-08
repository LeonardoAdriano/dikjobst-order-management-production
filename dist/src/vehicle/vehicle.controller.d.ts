import { VehicleDto } from './vehicle.dto';
import { VehicleService } from './vehicle.service';
export declare class VehicleController {
    private _vehicleService;
    constructor(_vehicleService: VehicleService);
    listAll(): Promise<VehicleDto[]>;
}
