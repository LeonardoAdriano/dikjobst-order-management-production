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
exports.DriverService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_desc_1 = require("../crud-service.desc");
const connection_service_1 = require("../connection.service");
const driver_dto_1 = require("./driver.dto");
let DriverService = class DriverService {
    constructor(_connService) {
        this._connService = _connService;
    }
    async readAll() {
        const drivers = (await this._connService.connection.query('SELECT FAHRERNR, NAME, VORNAME from TFahrer')) || [];
        const toResponse = drivers === null || drivers === void 0 ? void 0 : drivers.map((v) => new driver_dto_1.DriverDto({
            fahrerNr: v.FAHRERNR,
            firstName: v.VORNAME,
            name: v.NAME,
            free: true,
        }));
        return toResponse;
    }
};
DriverService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [connection_service_1.ConnectionService])
], DriverService);
exports.DriverService = DriverService;
//# sourceMappingURL=driver.service.js.map