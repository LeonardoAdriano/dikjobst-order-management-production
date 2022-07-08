import { Card } from 'src/general.dto';
import { CustomOrder } from './custom-order.entity';
import { CustomOrderService } from './custom-order.service';
export declare class CustomOrderController {
    private _customOrderService;
    constructor(_customOrderService: CustomOrderService);
    filterByDate(body: {
        date: string | Date;
    }): Promise<any>;
    create(order: CustomOrder): Promise<Card>;
    update(order: CustomOrder): Promise<Card>;
    delete(id: string): Promise<void>;
}
