"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ormconfig_1 = require("../ormconfig");
typeorm_1.createConnection(ormconfig_1.base)
    .then(async (connection) => {
    let queryRunner = connection.createQueryRunner();
    await queryRunner.createDatabase(ormconfig_1.DatabaseName.prod, true);
    console.log(`${ormconfig_1.DatabaseName.prod} created!`);
    if (process.env.NODE_ENV !== 'production') {
        await queryRunner.createDatabase(ormconfig_1.DatabaseName.dev, true);
        console.log(`${ormconfig_1.DatabaseName.dev} created!`);
        await queryRunner.createDatabase(ormconfig_1.DatabaseName.test, true);
        console.log(`${ormconfig_1.DatabaseName.test} created!`);
    }
    await connection.close();
})
    .catch(console.error);
//# sourceMappingURL=create-databases.js.map