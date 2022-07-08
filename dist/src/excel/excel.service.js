"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelService = void 0;
const common_1 = require("@nestjs/common");
const ExcelJs = require("exceljs");
const path_1 = require("path");
const general_dto_1 = require("../general.dto");
const date_1 = require("../utils/date");
const excel_util_1 = require("./excel.util");
const fs = require("fs");
let ExcelService = class ExcelService {
    constructor() {
        this._ADDRESS_ROW_START = 5;
        this._ADDRESS_ROW_END = 25;
        this._LAST_FILLED_ROW_OF_TABLE = 26;
        this._SPACE_BETWEEN_CONTAINER_NUMBER = ' '.repeat(6);
        this._ADDRESS_ENTRY_COUNT = 7;
        this._TEMPLATE_NAME = 'Tagesbericht - template.xlsx';
        this.filename = 'Tagesbericht';
        this.fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        this._workbook = new ExcelJs.Workbook();
        this._workbook.addWorksheet(this.filename);
    }
    _getWorksheet() {
        return this.workbook.getWorksheet(this.filename);
    }
    _mergeCells(sheet, from, to) {
        sheet.unMergeCells(from, to);
        sheet.mergeCells(from, to);
    }
    _mapContainerDescription(desc) {
        if (!desc)
            return '';
        desc || (desc = '');
        desc = desc.toLowerCase();
        if (desc.includes('hamburger mit klappe'))
            return 'Hbg ';
        if (desc.includes('deckelmulde'))
            return 'DM';
        if (desc.includes('mit deckel'))
            return 'DM';
        if (desc.includes('presscontainer'))
            return 'PC';
        return '';
    }
    _fillRows(card, tableStartPosition) {
        const sheet = this.workbook.getWorksheet(1);
        const rows = sheet.getRows(this._ADDRESS_ROW_START + tableStartPosition, this._ADDRESS_ROW_END - this._ADDRESS_ROW_START + 1 + tableStartPosition);
        let currentExcelBlock = 0;
        let blockIndex = 0;
        rows.forEach((v, i) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (currentExcelBlock < card.tour.length &&
                currentExcelBlock < this._ADDRESS_ENTRY_COUNT) {
                const currentTour = card.tour[currentExcelBlock];
                switch (blockIndex) {
                    case 0:
                    case 1:
                        if (blockIndex === 0) {
                            v.getCell(2).value = currentTour.customerName;
                            if (currentTour.typeOfWork)
                                v.getCell(3).value = currentTour.typeOfWork;
                            let rowNumber = 0;
                            if (currentTour.typeOfWork === 'abholen')
                                rowNumber = 2;
                            const typeCell = sheet.getCell(excel_util_1.ExcelUtil.Columns.ContainerType +
                                (i +
                                    this._ADDRESS_ROW_START +
                                    rowNumber +
                                    tableStartPosition));
                            switch (currentTour.typeOfWork) {
                                case 'stellen':
                                    let containerNumber = ((_a = currentTour.containerNumber) === null || _a === void 0 ? void 0 : _a.deliver) ? currentTour.containerNumber.deliver
                                        : ' ';
                                    let nameOfNumberType = typeCell.value
                                        ? typeCell.value.toString()
                                        : ' ';
                                    typeCell.value = {
                                        richText: [
                                            { text: containerNumber },
                                            {
                                                text: this._SPACE_BETWEEN_CONTAINER_NUMBER +
                                                    nameOfNumberType,
                                            },
                                        ],
                                    };
                                    break;
                                case 'abholen':
                                    const text = (_b = currentTour.containerNumber) === null || _b === void 0 ? void 0 : _b.carbon;
                                    let containerNumberCarbon = ((_c = currentTour
                                        .containerNumber) === null || _c === void 0 ? void 0 : _c.carbon) ? currentTour.containerNumber.carbon
                                        : ' ';
                                    let nameOfNumberTypeCarbon = typeCell.value
                                        ? typeCell.value.toString()
                                        : ' ';
                                    typeCell.value = {
                                        richText: [
                                            { text: containerNumberCarbon },
                                            {
                                                text: this._SPACE_BETWEEN_CONTAINER_NUMBER +
                                                    nameOfNumberTypeCarbon,
                                            },
                                        ],
                                    };
                                    break;
                                case 'tauschen':
                                    const cellText = ((_d = currentTour.containerNumber) === null || _d === void 0 ? void 0 : _d.deliver) ? currentTour.containerNumber.deliver
                                        : ' ';
                                    const cells = [
                                        sheet.getCell(excel_util_1.ExcelUtil.Columns.ContainerType +
                                            (i + this._ADDRESS_ROW_START + tableStartPosition)),
                                        sheet.getCell(excel_util_1.ExcelUtil.Columns.ContainerType +
                                            (i + this._ADDRESS_ROW_START + 2 + tableStartPosition)),
                                    ];
                                    cells.forEach((v, i) => {
                                        var _a;
                                        v.value = {
                                            richText: [
                                                { text: cellText },
                                                {
                                                    text: this._SPACE_BETWEEN_CONTAINER_NUMBER +
                                                        (((_a = v.value['richtText']) === null || _a === void 0 ? void 0 : _a.text) || ' '),
                                                },
                                            ],
                                        };
                                    });
                                    break;
                            }
                            sheet.getCell(excel_util_1.ExcelUtil.Columns.ContainerType +
                                (i + this._ADDRESS_ROW_START + 1 + tableStartPosition)).value = currentTour.containerType
                                ? `${currentTour.containerType}m³ ${this._mapContainerDescription(currentTour.containerDescription)}`
                                : '';
                            v.getCell(5).value = (_e = currentTour === null || currentTour === void 0 ? void 0 : currentTour.disposal) === null || _e === void 0 ? void 0 : _e.toLowerCase();
                            v.getCell(8).value = (_f = currentTour.trashTypes) === null || _f === void 0 ? void 0 : _f.join(',');
                            if (currentTour.weighNote)
                                sheet.getCell(excel_util_1.ExcelUtil.Columns.WeightId +
                                    (i + this._ADDRESS_ROW_START + tableStartPosition)).value = currentTour.weighNote;
                        }
                        else {
                            v.getCell(2).value = (_g = currentTour.address) === null || _g === void 0 ? void 0 : _g.street;
                            v.getCell(8).value = currentTour.comment;
                        }
                        blockIndex++;
                        break;
                    case 2:
                        v.getCell(2).value = `${((_h = currentTour.address) === null || _h === void 0 ? void 0 : _h.country) || ' '}, ${((_j = currentTour.address) === null || _j === void 0 ? void 0 : _j.plz) || ' '}`;
                        blockIndex = 0;
                        currentExcelBlock++;
                        break;
                }
            }
        });
        sheet.getCell(excel_util_1.ExcelUtil.Columns.Vehicle +
            (tableStartPosition + this._LAST_FILLED_ROW_OF_TABLE)).value = card.car;
        sheet.getCell(excel_util_1.ExcelUtil.Columns.Driver +
            (tableStartPosition + this._LAST_FILLED_ROW_OF_TABLE)).value = card.driver
            .filter((v) => v)
            .map((v) => `${v.name} ${v.firstName}`)
            .join(',');
    }
    _setPageFormat() {
        const sheet = this.workbook.getWorksheet(1);
        sheet.pageSetup.orientation = 'landscape';
        sheet.pageSetup.paperSize = 9;
        sheet.pageSetup.scale = 85;
        sheet.pageSetup.margins = {
            left: 0.2,
            right: 0.1,
            top: 0.3,
            bottom: 0,
            header: 0.3,
            footer: 0.3,
        };
    }
    async _copyTemplate() {
        const templateWorkbook = new ExcelJs.Workbook();
        await templateWorkbook.xlsx.readFile(path_1.join(__dirname, '..', '..', '..', 'daily-report-excel', this._TEMPLATE_NAME));
        return templateWorkbook.getWorksheet(1);
    }
    get workbook() {
        return this._workbook;
    }
    async loadTemplate(data) {
        this._workbook = new ExcelJs.Workbook();
        this.workbook.addWorksheet(this._TEMPLATE_NAME.split(' ')[0]);
        const date = new Date(data.date);
        const sheet = this.workbook.getWorksheet(1);
        const dayName = date_1.DAY_NAMES[date.getDay()];
        const neededTables = Math.floor(data.tour.length / this._ADDRESS_ENTRY_COUNT) + 1;
        const sheetTemplate = await this._copyTemplate();
        sheet.columns = [];
        sheetTemplate.columns.forEach((v) => sheet.columns.push(v));
        for (let currentTable = 0; currentTable < neededTables; currentTable++) {
            sheetTemplate.eachRow({ includeEmpty: true }, (row, rowNumber) => {
                if (rowNumber <= excel_util_1.ExcelUtil.TableRowIndex * (currentTable + 1) && (currentTable == 0) || (currentTable > 0) && rowNumber + excel_util_1.ExcelUtil.TableRowIndex * currentTable <= excel_util_1.ExcelUtil.TableRowIndex * (currentTable + 1)) {
                    let targetRow = sheet.getRow(rowNumber + excel_util_1.ExcelUtil.TableRowIndex * currentTable);
                    targetRow.height = row.height;
                    row.eachCell({ includeEmpty: true }, (cell, cellNumber) => {
                        const currentCell = targetRow.getCell(cellNumber);
                        currentCell.value = cell.value;
                        currentCell.style = cell.style;
                        currentCell.border = cell.border;
                        currentCell.font = cell.font;
                    });
                    row.commit();
                }
            });
            const tableStartPosition = excel_util_1.ExcelUtil.TableRowIndex * currentTable;
            const headerPosition = excel_util_1.ExcelUtil.TableRowIndex * currentTable + 2;
            const cells = {
                dayName: sheet.getCell('H' + headerPosition),
                date: sheet.getCell('J' + headerPosition),
            };
            const imageId2 = this.workbook.addImage({
                buffer: fs.readFileSync(path_1.join(__dirname, '..', '..', '..', 'public', 'logo.png')),
                extension: 'png',
            });
            sheet.addImage(imageId2, {
                tl: { col: 0, row: tableStartPosition + 1 },
                ext: { width: 240, height: 70 },
            });
            sheet.mergeCells('C' + headerPosition, 'F' + headerPosition);
            this._mergeCells(sheet, 'H' + headerPosition, 'I' + headerPosition);
            this._mergeCells(sheet, 'A' + (tableStartPosition + 4), 'B' + (tableStartPosition + 4));
            this._mergeCells(sheet, 'A' + (tableStartPosition + 26), 'B' + (tableStartPosition + 26));
            this._mergeCells(sheet, 'C' + (tableStartPosition + 26), 'E' + (tableStartPosition + 26));
            this._mergeCells(sheet, 'A' + (tableStartPosition + 27), 'B' + (tableStartPosition + 27));
            this._mergeCells(sheet, 'F' + (tableStartPosition + 27), 'G' + (tableStartPosition + 27));
            this._mergeCells(sheet, 'I' + (tableStartPosition + 27), 'J' + (tableStartPosition + 27));
            this._mergeCells(sheet, 'H' + (tableStartPosition + 4), 'I' + (tableStartPosition + 4));
            for (let rowAddressIndex = 0; rowAddressIndex < this._ADDRESS_ENTRY_COUNT; rowAddressIndex++) {
                this._mergeCells(sheet, 'C' + (tableStartPosition + 5 + rowAddressIndex * 3), 'C' + (tableStartPosition + 5 + 2 + rowAddressIndex * 3));
                this._mergeCells(sheet, 'E' + (tableStartPosition + 5 + rowAddressIndex * 3), 'E' + (tableStartPosition + 5 + 2 + rowAddressIndex * 3));
                this._mergeCells(sheet, 'F' + (tableStartPosition + 5 + rowAddressIndex * 3), 'F' + (tableStartPosition + 5 + 2 + rowAddressIndex * 3));
                this._mergeCells(sheet, 'H' + (tableStartPosition + 5 + rowAddressIndex * 3), 'I' + (tableStartPosition + 5 + rowAddressIndex * 3));
                this._mergeCells(sheet, 'H' + (tableStartPosition + 6 + rowAddressIndex * 3), 'J' + (tableStartPosition + 7 + rowAddressIndex * 3));
            }
            cells.dayName.value = dayName;
            cells.date.value = date_1.toGermanDate(date);
            sheet.getCell('H' + (tableStartPosition + 24)).border = {
                bottom: { style: 'thick' },
            };
            this._fillRows(data, tableStartPosition);
            sheet
                .getRow(tableStartPosition + this._LAST_FILLED_ROW_OF_TABLE + 1)
                .addPageBreak();
            sheet.getCell('J' + (tableStartPosition + this._LAST_FILLED_ROW_OF_TABLE)).value = data.dispatcher.name;
            data = Object.assign(Object.assign({}, data), { tour: data.tour.slice(this._ADDRESS_ENTRY_COUNT) });
        }
        this._setPageFormat();
        return this.workbook;
    }
};
ExcelService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ExcelService);
exports.ExcelService = ExcelService;
//# sourceMappingURL=excel.service.js.map