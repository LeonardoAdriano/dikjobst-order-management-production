"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelUtil = void 0;
var ExcelUtil;
(function (ExcelUtil) {
    let Width;
    (function (Width) {
        Width[Width["Small"] = 13] = "Small";
        Width[Width["Medium"] = 15] = "Medium";
        Width[Width["Large"] = 19] = "Large";
    })(Width = ExcelUtil.Width || (ExcelUtil.Width = {}));
    let Columns;
    (function (Columns) {
        Columns["Vehicle"] = "A";
        Columns["Driver"] = "C";
        Columns["Address"] = "B";
        Columns["TypeOfWork"] = "C";
        Columns["ContainerType"] = "D";
        Columns["Disposal"] = "E";
        Columns["Comment"] = "F";
        Columns["TrashTypes"] = "H";
        Columns["WeightId"] = "J";
    })(Columns = ExcelUtil.Columns || (ExcelUtil.Columns = {}));
    let FontSizes;
    (function (FontSizes) {
        FontSizes[FontSizes["Default"] = 10] = "Default";
    })(FontSizes = ExcelUtil.FontSizes || (ExcelUtil.FontSizes = {}));
    ExcelUtil.TableRowIndex = 27;
})(ExcelUtil = exports.ExcelUtil || (exports.ExcelUtil = {}));
//# sourceMappingURL=excel.util.js.map