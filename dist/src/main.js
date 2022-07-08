"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const ip = require("ip");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const connection_service_1 = require("./connection.service");
const environment_1 = require("./utils/environment");
async function bootstrap() {
    let appOptions = {};
    const app = await core_1.NestFactory.create(app_module_1.AppModule, appOptions);
    app.useStaticAssets(path_1.join(__dirname, '..', '..', 'public'), {
        prefix: '/assets',
    });
    app.setGlobalPrefix('api');
    await app.get(connection_service_1.ConnectionService).openConnection();
    const ipAddress = environment_1.isProduction() ? ip.address() : 'localhost';
    await app.listen(3000, ipAddress);
}
bootstrap();
//# sourceMappingURL=main.js.map