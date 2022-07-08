import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
export default class CreateVehicles implements Seeder {
    run(factory: Factory, connection: Connection): Promise<any>;
}
