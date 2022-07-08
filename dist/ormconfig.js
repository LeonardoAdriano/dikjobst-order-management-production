"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentConfig = exports.production = exports.test = exports.development = exports.base = exports.DatabaseName = exports.Environments = void 0;
exports.Environments = [
    'development',
    'test',
    'production',
];
exports.DatabaseName = {
    dev: 'order_management_dev',
    test: 'order_management_test',
    prod: 'order_management_prod',
};
exports.base = {
    type: 'mysql',
    host: 'localhost',
    name: 'default',
    port: 3306,
    username: 'tom',
    password: '123456',
    synchronize: false,
    logging: false,
    seeds: ['seeds/*{seed.ts,seed.js}'],
    factories: ['factories/*{.ts,.js}'],
};
exports.development = Object.assign(Object.assign({}, exports.base), { database: exports.DatabaseName.dev, migrations: ['dist/src/migrations/*.js'], subscribers: ['dist/src/subscriber/*.js'], entities: ['dist/src/**/*.entity.js'], synchronize: true, logger: 'debug', logging: true });
exports.test = Object.assign(Object.assign({}, exports.base), { database: exports.DatabaseName.test, migrations: ['src/migrations/*.ts'], subscribers: ['src/subscriber/*.ts'], entities: ['dist/**/*.entity.js'] });
exports.production = Object.assign(Object.assign({}, exports.base), { database: exports.DatabaseName.prod, migrations: ['migrations/*js'], entities: ['**/*.entity.js'], synchronize: false, cli: { migrationsDir: 'migrations' }, seeds: ['seeds/*.seed.js'], factories: ['factories/*.js'], databasePath: 'F:\\DBEntso.mdb' });
function environmentConfig(env) {
    const nodeENV = env || process.env.NODE_ENV;
    switch (nodeENV) {
        case 'production':
            return exports.production;
        case 'test':
            return exports.test;
        case 'development':
            return exports.development;
        default:
            return exports.development;
    }
}
exports.environmentConfig = environmentConfig;
exports.default = environmentConfig();
//# sourceMappingURL=ormconfig.js.map