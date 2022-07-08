import { DriverDto } from './driver.dto';
import { DriverService } from './driver.service';
export declare class DriverController {
    private _driverService;
    constructor(_driverService: DriverService);
    listAll(): Promise<DriverDto[]>;
}
