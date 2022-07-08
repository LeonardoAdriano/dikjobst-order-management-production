import * as ExcelJs from 'exceljs';
import { TourDTO } from 'src/general.dto';
export declare class ExcelService {
    private _workbook;
    private readonly _ADDRESS_ROW_START;
    private readonly _ADDRESS_ROW_END;
    private readonly _LAST_FILLED_ROW_OF_TABLE;
    private readonly _SPACE_BETWEEN_CONTAINER_NUMBER;
    private readonly _ADDRESS_ENTRY_COUNT;
    private readonly _TEMPLATE_NAME;
    readonly filename = "Tagesbericht";
    readonly fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    private _getWorksheet;
    private _mergeCells;
    private _mapContainerDescription;
    private _fillRows;
    private _setPageFormat;
    private _copyTemplate;
    constructor();
    get workbook(): ExcelJs.Workbook;
    loadTemplate(data: TourDTO): Promise<ExcelJs.Workbook>;
}
