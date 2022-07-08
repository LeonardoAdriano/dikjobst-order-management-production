import { Card } from 'src/general.dto';
import { ConnectionService } from '../connection.service';
import { CustomOrder } from './custom-order.entity';
export declare class CustomOrderService {
    private _connService;
    constructor(_connService: ConnectionService);
    readAllByDate(date: Date): Promise<any>;
    transformToCard(customOrder: CustomOrder): Card;
    transformToEntity(card: Card): {
        id: string;
        street: string;
        plz: number;
        country: string;
        status?: boolean;
        position?: number;
        typeOfWork?: import("../general.dto").TypeOfWork;
        disposal?: string;
        containerType?: number;
        customerName: string;
        containerDescription: string;
        address?: import("../general.dto").Address;
        comment?: string;
        processingNumber?: string;
        tilted?: boolean;
        weighNote?: string;
        containerNumber?: import("../general.dto").ContainerNumberType;
        trashTypes?: string[];
        containerName?: string;
        visible: boolean;
        phone: string;
        uid: string;
        validityDate: Date;
    };
}
