import * as ADODB from 'node-adodb';
export declare class ConnectionService {
    private _connection;
    get connection(): ADODB.open;
    openConnection(databaseName?: string): void;
}
