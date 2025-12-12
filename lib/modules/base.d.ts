export declare class Base {
    config: any;
    constructor(apiKey: string, apiSecret: string);
    publicRequest(method: string, path: string, paramsObj?: any): any;
    signRequest(method: string, path: string, paramsObj?: any): any;
}
