import { CRUDService } from '../crud-service.desc';
import { CostCenterDto } from './cost-center.dto';
import { ConnectionService } from '../connection.service';
export declare class CostCenterService implements CRUDService<CostCenterDto> {
    private _connService;
    constructor(_connService: ConnectionService);
    readAll(): Promise<CostCenterDto[]>;
}
