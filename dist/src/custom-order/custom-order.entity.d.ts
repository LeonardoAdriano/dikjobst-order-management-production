import { BaseEntity } from 'typeorm';
export declare class CustomOrder extends BaseEntity {
    id: string;
    customerName: string;
    typeOfWork?: string;
    trashTypes?: string;
    containerType?: number;
    containerName?: string;
    containerDescription?: string;
    comment?: string;
    phone?: string;
    disposal?: string;
    validityDate: Date;
    street?: string;
    plz?: number;
    country?: string;
}
