import { CRUDService } from 'src/crud-service.desc';
import { ConnectionService } from '../connection.service';
import { DriverDto } from './driver.dto';
export declare class DriverService implements CRUDService<DriverDto> {
    private _connService;
    constructor(_connService: ConnectionService);
    readAll(): Promise<DriverDto[]>;
}
