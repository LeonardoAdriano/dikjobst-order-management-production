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
exports.CostCenterService = void 0;
const common_1 = require("@nestjs/common");
const cost_center_dto_1 = require("./cost-center.dto");
const connection_service_1 = require("../connection.service");
let CostCenterService = class CostCenterService {
    constructor(_connService) {
        this._connService = _connService;
    }
    async readAll() {
        const costCenters = await this._connService.connection.query('SELECT Text1, Text2, Text3, KundenNr, KostenstelleID from TKostenstellen');
        return costCenters.map((v) => new cost_center_dto_1.CostCenterDto({
            text1: v.Text1,
            text2: v.Text2,
            text3: v.Text3,
            kostenstelleId: v.KostenstelleID,
            kundenNr: v.KundenNr,
        }));
    }
};
CostCenterService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [connection_service_1.ConnectionService])
], CostCenterService);
exports.CostCenterService = CostCenterService;
//# sourceMappingURL=cost-center.service.js.map