"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleDto = void 0;
const general_dto_1 = require("../general.dto");
class VehicleDto {
    constructor(partial) {
        this.driver = [];
        this.tour = [];
        this.visible = true;
        Object.assign(this, partial);
    }
}
exports.VehicleDto = VehicleDto;
//# sourceMappingURL=vehicle.dto.js.map