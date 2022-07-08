import { CRUDService } from 'src/crud-service.desc';
import { ConnectionService } from '../connection.service';
import { VehicleDto } from './vehicle.dto';
export declare class VehicleService implements CRUDService<VehicleDto> {
    private _connService;
    constructor(_connService: ConnectionService);
    readAll(): Promise<VehicleDto[]>;
}
