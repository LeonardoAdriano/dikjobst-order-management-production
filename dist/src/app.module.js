"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = require("../ormconfig");
const path_1 = require("path");
const connection_service_1 = require("./connection.service");
const cost_center_controller_1 = require("./cost-center/cost-center.controller");
const cost_center_service_1 = require("./cost-center/cost-center.service");
const customer_controller_1 = require("./customer/customer.controller");
const customer_service_1 = require("./customer/customer.service");
const driver_controller_1 = require("./driver/driver.controller");
const driver_service_1 = require("./driver/driver.service");
const excel_controller_1 = require("./excel/excel.controller");
const excel_service_1 = require("./excel/excel.service");
const order_controller_1 = require("./order/order.controller");
const order_service_1 = require("./order/order.service");
const vehicle_controller_1 = require("./vehicle/vehicle.controller");
const vehicle_service_1 = require("./vehicle/vehicle.service");
const dispatcher_controller_1 = require("./dispatchers/dispatcher.controller");
const custom_order_controller_1 = require("./custom-order/custom-order.controller");
const custom_order_service_1 = require("./custom-order/custom-order.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', '..', 'client'),
            }),
            typeorm_1.TypeOrmModule.forRoot(Object.assign({}, ormconfig_1.default)),
        ],
        controllers: [
            vehicle_controller_1.VehicleController,
            driver_controller_1.DriverController,
            custom_order_controller_1.CustomOrderController,
            customer_controller_1.CustomerController,
            cost_center_controller_1.CostCenterController,
            order_controller_1.OrderController,
            excel_controller_1.ExcelController,
            dispatcher_controller_1.DispatcherController,
        ],
        providers: [
            vehicle_service_1.VehicleService,
            connection_service_1.ConnectionService,
            driver_service_1.DriverService,
            customer_service_1.CustomerService,
            cost_center_service_1.CostCenterService,
            excel_service_1.ExcelService,
            order_service_1.OrderService,
            custom_order_service_1.CustomOrderService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map