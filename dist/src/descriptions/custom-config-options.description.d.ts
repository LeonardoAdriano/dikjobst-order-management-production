import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
export interface CustomConfigDescription extends MysqlConnectionOptions {
    seeds: string[];
    factories: string[];
    databasePath?: string;
}
