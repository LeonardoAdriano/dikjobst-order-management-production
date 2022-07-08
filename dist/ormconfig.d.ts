import { CustomConfigDescription } from './src/descriptions/custom-config-options.description';
export declare type Environment = 'production' | 'development' | 'test';
export declare const Environments: Environment[];
export declare const DatabaseName: {
    dev: string;
    test: string;
    prod: string;
};
export declare const base: CustomConfigDescription;
export declare const development: CustomConfigDescription;
export declare const test: CustomConfigDescription;
export declare const production: CustomConfigDescription;
export declare function environmentConfig(env?: Environment | string): CustomConfigDescription;
declare const _default: CustomConfigDescription;
export default _default;
