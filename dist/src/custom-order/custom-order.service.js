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
exports.CustomOrderService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_desc_1 = require("../crud-service.desc");
const general_dto_1 = require("../general.dto");
const connection_service_1 = require("../connection.service");
const custom_order_entity_1 = require("./custom-order.entity");
let CustomOrderService = class CustomOrderService {
    constructor(_connService) {
        this._connService = _connService;
    }
    async readAllByDate(date) {
        const customOrders = await custom_order_entity_1.CustomOrder.find({
            where: {
                validityDate: date
            },
        });
        const toResponse = customOrders.map((customOrder) => {
            var _a;
            return (Object.assign(Object.assign({}, customOrder), { uid: customOrder.id, trashTypes: ((_a = customOrder.trashTypes) === null || _a === void 0 ? void 0 : _a.split(',')) || [customOrder.trashTypes], id: -1, visible: true, address: { street: customOrder.street,
                    plz: customOrder.plz,
                    country: customOrder.country,
                    valid: true } }));
        });
        return toResponse;
    }
    transformToCard(customOrder) {
        var _a;
        return Object.assign(Object.assign({}, customOrder), { id: -1, uid: customOrder.id, address: { street: customOrder.street,
                plz: customOrder.plz,
                country: customOrder.country,
                valid: true }, visible: true, trashTypes: ((_a = customOrder.trashTypes) === null || _a === void 0 ? void 0 : _a.split(',')) || [customOrder.trashTypes] });
    }
    transformToEntity(card) {
        var _a, _b, _c;
        return Object.assign(Object.assign({}, card), { id: card.uid, street: (_a = card.address) === null || _a === void 0 ? void 0 : _a.street, plz: (_b = card === null || card === void 0 ? void 0 : card.address) === null || _b === void 0 ? void 0 : _b.plz, country: (_c = card === null || card === void 0 ? void 0 : card.address) === null || _c === void 0 ? void 0 : _c.country });
    }
};
CustomOrderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [connection_service_1.ConnectionService])
], CustomOrderService);
exports.CustomOrderService = CustomOrderService;
//# sourceMappingURL=custom-order.service.js.map