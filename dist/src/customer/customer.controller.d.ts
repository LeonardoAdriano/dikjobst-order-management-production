import { CustomerDto } from './customer.dto';
import { CustomerService } from './customer.service';
export declare class CustomerController {
    private _customerService;
    constructor(_customerService: CustomerService);
    listAll(): Promise<CustomerDto[]>;
}
