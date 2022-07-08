import { DispatcherDTO } from './dispatchers/dispatcher.dto';
export interface Tour {
    car: string;
    driver: Driver[];
    visible: boolean;
    tour: Card[];
    dispatcher?: DispatcherDTO;
}
export interface TourDTO extends Tour {
    date: Date;
}
export interface Driver {
    id?: string;
    free: boolean;
    firstName: string;
    name: string;
}
export declare type TypeOfWork = 'tauschen' | 'liefern' | 'abholen' | 'stellen';
export interface ContainerNumberType {
    carbon?: string;
    deliver?: string;
}
export interface Card {
    id: number;
    status?: boolean;
    position?: number;
    typeOfWork?: TypeOfWork;
    disposal?: string;
    containerType?: number;
    customerName: string;
    containerDescription: string;
    address?: Address;
    comment?: string;
    processingNumber?: string;
    tilted?: boolean;
    weighNote?: string;
    containerNumber?: ContainerNumberType;
    trashTypes?: string[];
    containerName?: string;
    visible: boolean;
    phone: string;
    uid: string;
    validityDate: Date;
}
export interface Address {
    street: string;
    plz: number;
    country: string;
    valid?: boolean;
}
export declare enum trashType {
    Bauschutt = "Bauschutt",
    Bauabfall = "Bauabfall",
    Gewerbeabfälle = "Gewerbeabf\u00E4lle",
    Altholz = "Altholz",
    Pflanzenabfälle = "Pflanzenabf\u00E4lle",
    Pappe = "Pappe",
    Folien = "Folien"
}
