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
exports.VehicleService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_desc_1 = require("../crud-service.desc");
const connection_service_1 = require("../connection.service");
const vehicle_entity_1 = require("./vehicle.entity");
let VehicleService = class VehicleService {
    constructor(_connService) {
        this._connService = _connService;
    }
    async readAll() {
        const vehicles = await vehicle_entity_1.Vehicle.find({ relations: ['classes'] });
        const toResponse = vehicles.map((v) => ({
            car: v.registrationNumber,
            sortNumber: v.sortNumber,
            visible: true,
            driver: [],
            tour: [],
            classes: v.classes,
        }));
        return toResponse;
    }
};
VehicleService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [connection_service_1.ConnectionService])
], VehicleService);
exports.VehicleService = VehicleService;
//# sourceMappingURL=vehicle.service.js.map