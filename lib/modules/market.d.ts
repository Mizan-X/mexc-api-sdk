import { Base } from './base';
export declare class Market extends Base {
    /**
     * Exchange Information
     *
     * @param options
     * ```
     * [options.symbol] - symbol(optional) ex: BTCUSDT.
     * [options.symbols] - for mutiple symbols, add comma for each symbol in string. ex: BTCUSDT,BNBBTC .
     *```
     *  @returns
     */
    exchangeInfo(options?: any): any;
    /**
     * Order Book
     *
     * @param symbol
     * @param options
     * ```
     * [options.limit] - Default 100; max 5000. Valid limits:[5, 10, 20, 50, 100, 500, 1000, 5000].
     * ```
     * @returns
     */
    depth(symbol: string, options?: any): any;
    /**
     * Recent Trades List
     *
     * @param symbol
     * @param options
     * ```
     * [options.limit] -limit(optional) Default 500; max 1000. ex: 500.
     * ```
     * @returns
     */
    trades(symbol: string, options?: any): any;
    /**
     * Old Trade Lookup
     *
     * @param symbol
     * @param options
     * ```
     * [options.limit] -limit(optional) Default 500; max 1000. ex:500.
     * ```
     * @returns
     */
    historicalTrades(symbol: string, options?: any): any;
    /**
     * Compressed/Aggregate Trades List
     *
     * Note: If sending startTime and endTime, the interval must be less than one hour
     * @param symbol
     * @param options
     * ```
     * [options.fromId] - id to get aggregate trades from INCLUSIVE.
     * [options.startTime] - Timestamp in ms to get aggregate trades from INCLUSIVE.
     * [options.endTime] - Timestamp in ms to get aggregate trades until INCLUSIVE.
     * [options.limit] - Default 500; max 1000. ex:500
     * ```
     * @returns
     */
    aggTrades(symbol: string, options?: any): any;
    /**
     * Kline/Candlestick Data
     *
     * @param symbol
     * @param interval
     * @param options
     * ```
     * [options.startTime]
     * [options.endTime]
     * [options.limit] -Default 500; max 1000. ex: 500
     * ```
     * @returns
     */
    klines(symbol: string, interval: string, options?: any): any;
    /**
     * Current Average Price
     *
     * @param symbol
     */
    avgPrice(symbol: string): any;
    /**
     * 24hr Ticker Price Change Statistics
     *
     * @param symbol
     */
    ticker24hr(symbol?: string): any;
    /**
     * Symbol Price Ticker
     *
     * @param symbol
     */
    tickerPrice(symbol?: string): any;
    /**
     * Symbol Order Book Ticker
     * @param symbol
     */
    bookTicker(symbol?: string): any;
}
