import { Common } from './common';
export declare class UserData extends Common {
    /**
     * Account Information
     *
     * @returns
     */
    accountInfo(): any;
    /**
     * Account Trade List
     *
     * @param symbol
     * @param options
     * ```
     * [options.orderId] - This can only be used in combination with symbol.
     * [options.startTime]
     * [options.endTime]
     * [options.fromId] - TradeId to fetch from. Default gets most recent trades.
     * [options.limit] - default: 500, Max: 1000
     * ```
     * @returns
     */
    accountTradeList(symbol: string, options?: any): any;
}
