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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomOrderController = void 0;
const common_1 = require("@nestjs/common");
const invalid_date_exception_1 = require("../errors/invalid-date.exception");
const general_dto_1 = require("../general.dto");
const custom_order_entity_1 = require("./custom-order.entity");
const custom_order_service_1 = require("./custom-order.service");
let CustomOrderController = class CustomOrderController {
    constructor(_customOrderService) {
        this._customOrderService = _customOrderService;
    }
    async filterByDate(body) {
        const safeDate = new Date(body.date);
        safeDate.setHours(0, 0, 0, 0);
        if (isNaN(safeDate.valueOf())) {
            throw new invalid_date_exception_1.InvalidDate();
        }
        return await this._customOrderService.readAllByDate(safeDate);
    }
    async create(order) {
        let tempOrder = custom_order_entity_1.CustomOrder.create(Object.assign({}, order));
        return tempOrder.save().then(e => this._customOrderService.transformToCard(e));
    }
    async update(order) {
        let tempOrder = custom_order_entity_1.CustomOrder.find(Object.assign({}, order));
        return order.save().then(e => this._customOrderService.transformToCard(e));
    }
    async delete(id) {
        await (await custom_order_entity_1.CustomOrder.findOneOrFail(id)).remove();
        return;
    }
};
__decorate([
    common_1.Post('filterByDate'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomOrderController.prototype, "filterByDate", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [custom_order_entity_1.CustomOrder]),
    __metadata("design:returntype", Promise)
], CustomOrderController.prototype, "create", null);
__decorate([
    common_1.Patch('update'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [custom_order_entity_1.CustomOrder]),
    __metadata("design:returntype", Promise)
], CustomOrderController.prototype, "update", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomOrderController.prototype, "delete", null);
CustomOrderController = __decorate([
    common_1.Controller('custom-order'),
    __metadata("design:paramtypes", [custom_order_service_1.CustomOrderService])
], CustomOrderController);
exports.CustomOrderController = CustomOrderController;
//# sourceMappingURL=custom-order.controller.js.map