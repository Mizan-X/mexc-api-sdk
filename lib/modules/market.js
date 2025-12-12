"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = void 0;
const base_1 = require("./base");
const util_1 = require("../util");
class Market extends base_1.Base {
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
    exchangeInfo(options = {}) {
        if (Object.keys(options).includes("symbol")) {
            options["symbol"] = options["symbol"].toUpperCase();
        }
        if (Object.keys(options).includes("symbols")) {
            options["symbols"] = options["symbols"].split(',').map((symbol) => symbol.toUpperCase()).join(',');
        }
        const res = this.publicRequest("GET", "/exchangeInfo", options);
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
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
    depth(symbol, options = { limit: 100 }) {
        const res = this.publicRequest("GET", "/depth", Object.assign(options, {
            symbol: symbol.toUpperCase(),
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
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
    trades(symbol, options = { limit: 500 }) {
        const res = this.publicRequest("GET", "/trades", Object.assign(options, {
            symbol: symbol.toUpperCase(),
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
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
    historicalTrades(symbol, options = { limit: 500 }) {
        const res = this.publicRequest("GET", "/historicalTrades", Object.assign(options, {
            symbol: symbol.toUpperCase(),
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
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
    aggTrades(symbol, options = { limit: 500 }) {
        const res = this.publicRequest("GET", "/aggTrades", Object.assign(options, {
            symbol: symbol.toUpperCase(),
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
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
    klines(symbol, interval, options = { limit: 500 }) {
        const res = this.publicRequest("GET", "/klines", Object.assign(options, {
            symbol: symbol.toUpperCase(),
            interval: interval,
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
    /**
     * Current Average Price
     *
     * @param symbol
     */
    avgPrice(symbol) {
        const res = this.publicRequest("GET", "/avgPrice", { symbol: symbol.toUpperCase() });
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
    /**
     * 24hr Ticker Price Change Statistics
     *
     * @param symbol
     */
    ticker24hr(symbol) {
        if (symbol) {
            symbol = symbol.toUpperCase();
        }
        const res = this.publicRequest("GET", "/ticker/24hr", { symbol });
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
    /**
     * Symbol Price Ticker
     *
     * @param symbol
     */
    tickerPrice(symbol) {
        if (symbol) {
            symbol = symbol.toUpperCase();
        }
        const res = this.publicRequest("GET", "/ticker/price", { symbol });
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
    /**
     * Symbol Order Book Ticker
     * @param symbol
     */
    bookTicker(symbol) {
        if (symbol) {
            symbol = symbol.toUpperCase();
        }
        const res = this.publicRequest("GET", "/ticker/bookTicker", { symbol });
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
}
exports.Market = Market;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZXMvbWFya2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUE4QjtBQUM5QixrQ0FBb0M7QUFFcEMsTUFBYSxNQUFPLFNBQVEsV0FBSTtJQUM5Qjs7Ozs7Ozs7O09BU0c7SUFDSCxZQUFZLENBQUMsVUFBZSxFQUFFO1FBQzVCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RELENBQUM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDN0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUcsQ0FBQztRQUVELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sV0FBVyxHQUFHLElBQUEsaUJBQVUsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsS0FBSyxDQUFDLE1BQWMsRUFBRSxV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QUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbkUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxJQUFBLGlCQUFVLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxNQUFlO1FBQ3hCLElBQUksTUFBTSxFQUFFLENBQUM7WUFDWCxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDeEUsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxJQUFBLGlCQUFVLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBNU5ELHdCQTROQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgZnJvbWF0RGF0YSB9IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBNYXJrZXQgZXh0ZW5kcyBCYXNlIHtcbiAgLyoqXG4gICAqIEV4Y2hhbmdlIEluZm9ybWF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIGBgYFxuICAgKiBbb3B0aW9ucy5zeW1ib2xdIC0gc3ltYm9sKG9wdGlvbmFsKSBleDogQlRDVVNEVC5cbiAgICogW29wdGlvbnMuc3ltYm9sc10gLSBmb3IgbXV0aXBsZSBzeW1ib2xzLCBhZGQgY29tbWEgZm9yIGVhY2ggc3ltYm9sIGluIHN0cmluZy4gZXg6IEJUQ1VTRFQsQk5CQlRDIC5cbiAgICpgYGBcbiAgICogIEByZXR1cm5zXG4gICAqL1xuICBleGNoYW5nZUluZm8ob3B0aW9uczogYW55ID0ge30pIHtcbiAgICBpZiAoT2JqZWN0LmtleXMob3B0aW9ucykuaW5jbHVkZXMoXCJzeW1ib2xcIikpIHtcbiAgICAgIG9wdGlvbnNbXCJzeW1ib2xcIl0gPSBvcHRpb25zW1wic3ltYm9sXCJdLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyhvcHRpb25zKS5pbmNsdWRlcyhcInN5bWJvbHNcIikpIHtcbiAgICAgIG9wdGlvbnNbXCJzeW1ib2xzXCJdID0gb3B0aW9uc1tcInN5bWJvbHNcIl0uc3BsaXQoJywnKS5tYXAoKHN5bWJvbDogYW55KSA9PiBzeW1ib2wudG9VcHBlckNhc2UoKSkuam9pbignLCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IHRoaXMucHVibGljUmVxdWVzdChcIkdFVFwiLCBcIi9leGNoYW5nZUluZm9cIiwgb3B0aW9ucyk7XG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yZGVyIEJvb2tcbiAgICpcbiAgICogQHBhcmFtIHN5bWJvbFxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBgYGBcbiAgICogW29wdGlvbnMubGltaXRdIC0gRGVmYXVsdCAxMDA7IG1heCA1MDAwLiBWYWxpZCBsaW1pdHM6WzUsIDEwLCAyMCwgNTAsIDEwMCwgNTAwLCAxMDAwLCA1MDAwXS5cbiAgICogYGBgXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBkZXB0aChzeW1ib2w6IHN0cmluZywgb3B0aW9uczogYW55ID0geyBsaW1pdDogMTAwIH0pIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnB1YmxpY1JlcXVlc3QoXG4gICAgICBcIkdFVFwiLFxuICAgICAgXCIvZGVwdGhcIixcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICBzeW1ib2w6IHN5bWJvbC50b1VwcGVyQ2FzZSgpLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY2VudCBUcmFkZXMgTGlzdFxuICAgKlxuICAgKiBAcGFyYW0gc3ltYm9sXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIGBgYFxuICAgKiBbb3B0aW9ucy5saW1pdF0gLWxpbWl0KG9wdGlvbmFsKSBEZWZhdWx0IDUwMDsgbWF4IDEwMDAuIGV4OiA1MDAuXG4gICAqIGBgYFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgdHJhZGVzKHN5bWJvbDogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7IGxpbWl0OiA1MDAgfSkge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMucHVibGljUmVxdWVzdChcbiAgICAgIFwiR0VUXCIsXG4gICAgICBcIi90cmFkZXNcIixcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICBzeW1ib2w6IHN5bWJvbC50b1VwcGVyQ2FzZSgpLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgLyoqXG4gICAqIE9sZCBUcmFkZSBMb29rdXBcbiAgICpcbiAgICogQHBhcmFtIHN5bWJvbFxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBgYGBcbiAgICogW29wdGlvbnMubGltaXRdIC1saW1pdChvcHRpb25hbCkgRGVmYXVsdCA1MDA7IG1heCAxMDAwLiBleDo1MDAuXG4gICAqIGBgYFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgaGlzdG9yaWNhbFRyYWRlcyhzeW1ib2w6IHN0cmluZywgb3B0aW9uczogYW55ID0geyBsaW1pdDogNTAwIH0pIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnB1YmxpY1JlcXVlc3QoXG4gICAgICBcIkdFVFwiLFxuICAgICAgXCIvaGlzdG9yaWNhbFRyYWRlc1wiLFxuICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgIHN5bWJvbDogc3ltYm9sLnRvVXBwZXJDYXNlKCksXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG5cbiAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHJlc3NlZC9BZ2dyZWdhdGUgVHJhZGVzIExpc3RcbiAgICogXG4gICAqIE5vdGU6IElmIHNlbmRpbmcgc3RhcnRUaW1lIGFuZCBlbmRUaW1lLCB0aGUgaW50ZXJ2YWwgbXVzdCBiZSBsZXNzIHRoYW4gb25lIGhvdXJcbiAgICogQHBhcmFtIHN5bWJvbFxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBgYGBcbiAgICogW29wdGlvbnMuZnJvbUlkXSAtIGlkIHRvIGdldCBhZ2dyZWdhdGUgdHJhZGVzIGZyb20gSU5DTFVTSVZFLlxuICAgKiBbb3B0aW9ucy5zdGFydFRpbWVdIC0gVGltZXN0YW1wIGluIG1zIHRvIGdldCBhZ2dyZWdhdGUgdHJhZGVzIGZyb20gSU5DTFVTSVZFLlxuICAgKiBbb3B0aW9ucy5lbmRUaW1lXSAtIFRpbWVzdGFtcCBpbiBtcyB0byBnZXQgYWdncmVnYXRlIHRyYWRlcyB1bnRpbCBJTkNMVVNJVkUuXG4gICAqIFtvcHRpb25zLmxpbWl0XSAtIERlZmF1bHQgNTAwOyBtYXggMTAwMC4gZXg6NTAwXG4gICAqIGBgYFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYWdnVHJhZGVzKHN5bWJvbDogc3RyaW5nLCBvcHRpb25zOiBhbnkgPSB7IGxpbWl0OiA1MDAgfSkge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMucHVibGljUmVxdWVzdChcbiAgICAgIFwiR0VUXCIsXG4gICAgICBcIi9hZ2dUcmFkZXNcIixcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICBzeW1ib2w6IHN5bWJvbC50b1VwcGVyQ2FzZSgpLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgLyoqXG4gICAqIEtsaW5lL0NhbmRsZXN0aWNrIERhdGFcbiAgICpcbiAgICogQHBhcmFtIHN5bWJvbFxuICAgKiBAcGFyYW0gaW50ZXJ2YWxcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogYGBgXG4gICAqIFtvcHRpb25zLnN0YXJ0VGltZV1cbiAgICogW29wdGlvbnMuZW5kVGltZV1cbiAgICogW29wdGlvbnMubGltaXRdIC1EZWZhdWx0IDUwMDsgbWF4IDEwMDAuIGV4OiA1MDBcbiAgICogYGBgXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBrbGluZXMoc3ltYm9sOiBzdHJpbmcsIGludGVydmFsOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHsgbGltaXQ6IDUwMCB9KSB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5wdWJsaWNSZXF1ZXN0KFxuICAgICAgXCJHRVRcIixcbiAgICAgIFwiL2tsaW5lc1wiLFxuICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgIHN5bWJvbDogc3ltYm9sLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIGludGVydmFsOiBpbnRlcnZhbCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG5cbiAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gIH1cblxuICAvKipcbiAgICogQ3VycmVudCBBdmVyYWdlIFByaWNlXG4gICAqXG4gICAqIEBwYXJhbSBzeW1ib2xcbiAgICovXG4gIGF2Z1ByaWNlKHN5bWJvbDogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5wdWJsaWNSZXF1ZXN0KFwiR0VUXCIsIFwiL2F2Z1ByaWNlXCIsIHsgc3ltYm9sOiBzeW1ib2wudG9VcHBlckNhc2UoKSB9KTtcbiAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG5cbiAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gIH1cblxuICAvKipcbiAgICogMjRociBUaWNrZXIgUHJpY2UgQ2hhbmdlIFN0YXRpc3RpY3NcbiAgICpcbiAgICogQHBhcmFtIHN5bWJvbFxuICAgKi9cbiAgdGlja2VyMjRocihzeW1ib2w/OiBzdHJpbmcpIHtcbiAgICBpZiAoc3ltYm9sKSB7XG4gICAgICBzeW1ib2wgPSBzeW1ib2wudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSB0aGlzLnB1YmxpY1JlcXVlc3QoXCJHRVRcIiwgXCIvdGlja2VyLzI0aHJcIiwgeyBzeW1ib2wgfSk7XG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bWJvbCBQcmljZSBUaWNrZXJcbiAgICpcbiAgICogQHBhcmFtIHN5bWJvbFxuICAgKi9cbiAgdGlja2VyUHJpY2Uoc3ltYm9sPzogc3RyaW5nKSB7XG4gICAgaWYgKHN5bWJvbCkge1xuICAgICAgc3ltYm9sID0gc3ltYm9sLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlcyA9IHRoaXMucHVibGljUmVxdWVzdChcIkdFVFwiLCBcIi90aWNrZXIvcHJpY2VcIiwgeyBzeW1ib2wgfSk7XG4gICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuXG4gICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICB9XG5cbiAgLyoqXG4gICAqIFN5bWJvbCBPcmRlciBCb29rIFRpY2tlclxuICAgKiBAcGFyYW0gc3ltYm9sXG4gICAqL1xuICBib29rVGlja2VyKHN5bWJvbD86IHN0cmluZykge1xuICAgIGlmIChzeW1ib2wpIHtcbiAgICAgIHN5bWJvbCA9IHN5bWJvbC50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcyA9IHRoaXMucHVibGljUmVxdWVzdChcIkdFVFwiLCBcIi90aWNrZXIvYm9va1RpY2tlclwiLCB7IHN5bWJvbCB9KTtcbiAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG5cbiAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gIH1cbn1cbiJdfQ==