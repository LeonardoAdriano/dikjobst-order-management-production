import { ConnectionService } from '../connection.service';
export declare class OrderService {
    private _connService;
    constructor(_connService: ConnectionService);
    readAllByDate(date: Date): Promise<any>;
}
