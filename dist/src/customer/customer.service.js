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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_desc_1 = require("../crud-service.desc");
const connection_service_1 = require("../connection.service");
const customer_dto_1 = require("./customer.dto");
let CustomerService = class CustomerService {
    constructor(_connService) {
        this._connService = _connService;
    }
    async readAll() {
        const customers = (await this._connService.connection.query('SELECT KundenNr, Name2, Name3, Strasse, PLZ, Ort FROM TKunden')) || [];
        const toReturn = customers.map((v) => new customer_dto_1.CustomerDto({
            kundenNr: v.KundenNr,
            name2: v.Name2,
            name3: v.Name3,
            ort: v.Ort,
            plz: v.PLZ,
            strasse: v.Strasse,
        }));
        return toReturn;
    }
};
CustomerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [connection_service_1.ConnectionService])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map