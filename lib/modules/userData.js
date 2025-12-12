"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserData = void 0;
const common_1 = require("./common");
const util_1 = require("../util");
class UserData extends common_1.Common {
    /**
     * Account Information
     *
     * @returns
     */
    accountInfo() {
        const res = this.signRequest('GET', '/account');
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
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
    accountTradeList(symbol, options = { limit: 500 }) {
        const res = this.signRequest('GET', '/myTrades', Object.assign(options, {
            symbol: symbol.toUpperCase()
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
}
exports.UserData = UserData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy91c2VyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBa0M7QUFDbEMsa0NBQW9DO0FBRXBDLE1BQWEsUUFBUyxTQUFRLGVBQU07SUFDaEM7Ozs7T0FJRztJQUNJLFdBQVc7UUFDaEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDaEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxJQUFBLGlCQUFVLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUdEOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSSxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsVUFBYyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDbEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3RFLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFO1NBQzdCLENBQUMsQ0FBQyxDQUFBO1FBQ0gsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxJQUFBLGlCQUFVLEVBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBdENILDRCQXNDRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbiB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCB7IGZyb21hdERhdGEgfSBmcm9tICcuLi91dGlsJ1xuXG5leHBvcnQgY2xhc3MgVXNlckRhdGEgZXh0ZW5kcyBDb21tb24ge1xuICAgIC8qKlxuICAgICAqIEFjY291bnQgSW5mb3JtYXRpb25cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjb3VudEluZm8oKSB7XG4gICAgICBjb25zdCByZXMgPSB0aGlzLnNpZ25SZXF1ZXN0ICgnR0VUJywgJy9hY2NvdW50JylcbiAgICAgIGNvbnN0IHJhd0RhdGEgPSBKU09OLnBhcnNlKHJlcy5nZXRCb2R5KCkpO1xuICAgICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuICBcbiAgICAgIHJldHVybiBmb3JtYXREYXRhcztcbiAgICB9XG4gIFxuICBcbiAgICAvKipcbiAgICAgKiBBY2NvdW50IFRyYWRlIExpc3RcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gc3ltYm9sIFxuICAgICAqIEBwYXJhbSBvcHRpb25zIFxuICAgICAqIGBgYFxuICAgICAqIFtvcHRpb25zLm9yZGVySWRdIC0gVGhpcyBjYW4gb25seSBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggc3ltYm9sLlxuICAgICAqIFtvcHRpb25zLnN0YXJ0VGltZV1cbiAgICAgKiBbb3B0aW9ucy5lbmRUaW1lXVxuICAgICAqIFtvcHRpb25zLmZyb21JZF0gLSBUcmFkZUlkIHRvIGZldGNoIGZyb20uIERlZmF1bHQgZ2V0cyBtb3N0IHJlY2VudCB0cmFkZXMuXG4gICAgICogW29wdGlvbnMubGltaXRdIC0gZGVmYXVsdDogNTAwLCBNYXg6IDEwMDBcbiAgICAgKiBgYGBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjb3VudFRyYWRlTGlzdChzeW1ib2w6IHN0cmluZywgb3B0aW9uczphbnkgPSB7IGxpbWl0OiA1MDAgfSkge1xuICAgICAgY29uc3QgcmVzID0gdGhpcy5zaWduUmVxdWVzdCgnR0VUJywgJy9teVRyYWRlcycsIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICBzeW1ib2w6IHN5bWJvbC50b1VwcGVyQ2FzZSgpXG4gICAgICB9KSlcbiAgICAgIGNvbnN0IHJhd0RhdGEgPSBKU09OLnBhcnNlKHJlcy5nZXRCb2R5KCkpO1xuICAgICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuICBcbiAgICAgIHJldHVybiBmb3JtYXREYXRhcztcbiAgICB9XG4gIH1cbiJdfQ==