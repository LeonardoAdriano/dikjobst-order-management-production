import { CostCenterDto } from './cost-center.dto';
import { CostCenterService } from './cost-center.service';
import { ConnectionService } from '../connection.service';
export declare class CostCenterController {
    private _costCenterService;
    private _connService;
    constructor(_costCenterService: CostCenterService, _connService: ConnectionService);
    listAll(): Promise<CostCenterDto[]>;
}
