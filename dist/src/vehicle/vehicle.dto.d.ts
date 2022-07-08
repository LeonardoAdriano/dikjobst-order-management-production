import { Tour } from 'src/general.dto';
import { VehicleClass } from './vehicle-class.entity';
export declare class VehicleDto implements Tour {
    car: string;
    sortNumber: number;
    driver: any[];
    tour: any[];
    visible: boolean;
    classes: VehicleClass[];
    constructor(partial: Partial<VehicleDto>);
}
