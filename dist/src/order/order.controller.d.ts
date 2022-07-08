import { OrderService } from './order.service';
export declare class OrderController {
    private _orderService;
    constructor(_orderService: OrderService);
    filterByDate(body: {
        date: string | Date;
    }): Promise<any>;
}
