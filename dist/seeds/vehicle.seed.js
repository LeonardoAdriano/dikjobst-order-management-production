"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_class_entity_1 = require("./../src/vehicle/vehicle-class.entity");
const vehicle_entity_1 = require("./../src/vehicle/vehicle.entity");
const vehicle_class_data_1 = require("./vehicle-class.data");
const vehicle_data_1 = require("./vehicle.data");
class CreateVehicles {
    async run(factory, connection) {
        for (let vClass of vehicle_class_data_1.VehicleClassData) {
            let currClass = await vehicle_class_entity_1.VehicleClass.create(vClass);
            await currClass.save();
        }
        for (let vData of vehicle_data_1.VehicleData) {
            let currVehicle = await vehicle_entity_1.Vehicle.create(vData);
            (currVehicle.classes = await Promise.all(currVehicle.classes.map(async (v) => await vehicle_class_entity_1.VehicleClass.findOne({ where: { name: v.name } })))),
                await currVehicle.save();
        }
    }
}
exports.default = CreateVehicles;
//# sourceMappingURL=vehicle.seed.js.map