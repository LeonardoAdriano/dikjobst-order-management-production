export interface CRUDService<T> {
    readAll(): Promise<T[]>;
}
