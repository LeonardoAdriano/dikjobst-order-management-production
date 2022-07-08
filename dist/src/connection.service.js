"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionService = void 0;
const common_1 = require("@nestjs/common");
const ADODB = require("node-adodb");
const ormconfig_1 = require("../ormconfig");
let ConnectionService = class ConnectionService {
    get connection() {
        return this._connection;
    }
    openConnection(databaseName) {
        const databasePath = ormconfig_1.environmentConfig().databasePath ||
            __dirname + `\\..\\..\\database\\${databaseName || 'DBEntso'}.mdb`;
        this._connection = ADODB.open(`Provider=Microsoft.Jet.OLEDB.4.0;Data Source=${databasePath};`);
    }
};
ConnectionService = __decorate([
    common_1.Injectable()
], ConnectionService);
exports.ConnectionService = ConnectionService;
//# sourceMappingURL=connection.service.js.map