import { Response } from 'express';
import { TourDTO } from '../general.dto';
import { ExcelService } from './excel.service';
export declare class ExcelController {
    private _excelService;
    constructor(_excelService: ExcelService);
    writeDailyReport(data: TourDTO, res: Response): Promise<void>;
}
