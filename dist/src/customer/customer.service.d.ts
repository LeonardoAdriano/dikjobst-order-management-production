import { CRUDService } from 'src/crud-service.desc';
import { ConnectionService } from '../connection.service';
import { CustomerDto } from './customer.dto';
export declare class CustomerService implements CRUDService<CustomerDto> {
    private _connService;
    constructor(_connService: ConnectionService);
    readAll(): Promise<CustomerDto[]>;
}
