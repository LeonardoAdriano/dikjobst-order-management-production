"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const ormconfig_1 = require("../ormconfig");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await typeorm_1.createConnection(ormconfig_1.default),
    },
];
//# sourceMappingURL=database.provider.js.map