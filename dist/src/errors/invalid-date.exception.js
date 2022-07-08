"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDate = void 0;
const common_1 = require("@nestjs/common");
class InvalidDate extends common_1.HttpException {
    constructor() {
        super('Das Datum ist nicht valide.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.InvalidDate = InvalidDate;
//# sourceMappingURL=invalid-date.exception.js.map