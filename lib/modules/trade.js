"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trade = void 0;
const userData_1 = require("./userData");
const util_1 = require("../util");
class Trade extends userData_1.UserData {
    /**
     * Test New Order
     *
     * @param symbol
     * @param side
     * @param orderType
     * @param options
     * ```
     * [options.timeInForce]
     * [options.quantity]
     * [options.quoteOrderQty]
     * [options.price]
     * [options.newClientOrderId] - A unique id among open orders. Automatically generated if not sent.
     * [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
     * [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
     * [options.newOrderRespType] - Set the response JSON. ACK, RESULT, or FULL;
     *    MARKET and LIMIT order types default to FULL, all other orders default to ACK.
     * [options.recvWindow] - The value cannot be greater than 60000
     * ```
     * @returns
     */
    newOrderTest(symbol, side, orderType, options = {}) {
        if ([symbol, side, orderType].some(str => !str.trim())) {
            console.assert(false, `Some params are required`);
            return;
        }
        const res = this.signRequest('POST', '/order/test', Object.assign(options, {
            symbol: symbol.toUpperCase(),
            side: side.toUpperCase(),
            type: orderType.toUpperCase()
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
    /**
     * New Order
     *
     * @param symbol
     * @param side
     * @param orderType
     * @param options
     * ```
     * [options.timeInForce]
     * [options.quantity]
     * [options.quoteOrderQty]
     * [options.price]
     * [options.newClientOrderId] - A unique id among open orders. Automatically generated if not sent.
     * [options.stopPrice] - Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
     * [options.icebergQty] - Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
     * [options.newOrderRespType] - Set the response JSON. ACK, RESULT, or FULL;
     *    MARKET and LIMIT order types default to FULL, all other orders default to ACK.
     * [options.recvWindow] - The value cannot be greater than 60000
     * ```
     * @returns
     */
    newOrder(symbol, side, orderType, options = {}) {
        if ([symbol, side, orderType].some(str => !str.trim())) {
            console.assert(false, `Some params are required`);
            return;
        }
        const res = this.signRequest('POST', '/order', Object.assign(options, {
            symbol: symbol.toUpperCase(),
            side: side.toUpperCase(),
            type: orderType.toUpperCase()
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
    /**
     * Cancel Order
     *
     * @param symbol
     * @param options
     * ```
     * [options.orderId]
     * [options.origClientOrderId]
     * [options.newClientOrderId]
     * ```
     * @returns
     */
    cancelOrder(symbol, options = {}) {
        const res = this.signRequest('DELETE', '/order', Object.assign(options, {
            symbol: symbol.toUpperCase()
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
    /**
     * Cancel all Open Orders on a Symbol
     *
     * @param symbol
     * @returns
     */
    cancelOpenOrders(symbol) {
        const res = this.signRequest('DELETE', '/openOrders', {
            symbol: symbol.toUpperCase()
        });
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
    /**
     * Query Order
     *
     * @param symbol
     * @param options
     * ```
     * [options.orderId] - At least one of orderId and origClientOrderId needs to be sent
     * [options.origClientOrderId]
     * ```
     * @returns
     */
    queryOrder(symbol, options = {}) {
        const res = this.signRequest('GET', '/order', Object.assign(options, {
            symbol: symbol.toUpperCase()
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
    /**
     * Current Open Orders
     *
     * @param symbol
     * @returns
     */
    openOrders(symbol) {
        const res = this.signRequest('GET', '/openOrders', { symbol: symbol.toUpperCase() });
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
    /**
     * All Orders
     *
     * @param symbol
     * @param options
     * ```
     * [options.orderId] - If startTime and endTime are set, orderId does not need to be set
     * [options.startTime]
     * [options.endTime]
     * [options.limit] - value between 1 and 1000, default is 500
     * ```
     * @returns
     */
    allOrders(symbol, options = { limit: 500 }) {
        const res = this.signRequest('GET', '/allOrders', Object.assign(options, {
            symbol: symbol.toUpperCase()
        }));
        const rawData = JSON.parse(res.getBody());
        const formatDatas = (0, util_1.fromatData)(rawData);
        return formatDatas;
    }
}
exports.Trade = Trade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy90cmFkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFDdEMsa0NBQW9DO0FBRXBDLE1BQWEsS0FBTSxTQUFRLG1CQUFRO0lBQy9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CRztJQUNJLFlBQVksQ0FDZixNQUFjLEVBQ2QsSUFBWSxFQUNaLFNBQWlCLEVBQ2pCLFVBQWUsRUFBRTtRQUVqQixJQUFHLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDcEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsMEJBQTBCLENBQUMsQ0FBQTtZQUNqRCxPQUFNO1FBQ1YsQ0FBQztRQUNELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN2RSxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUM1QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixJQUFJLEVBQUUsU0FBUyxDQUFDLFdBQVcsRUFBRTtTQUNoQyxDQUFDLENBQUMsQ0FBQTtRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUMsTUFBTSxXQUFXLEdBQUcsSUFBQSxpQkFBVSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FvQkc7SUFDSSxRQUFRLENBQ1gsTUFBYyxFQUNkLElBQVksRUFDWixTQUFpQixFQUNqQixVQUFlLEVBQUU7UUFFakIsSUFBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3BELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLDBCQUEwQixDQUFDLENBQUE7WUFDakQsT0FBTTtRQUNWLENBQUM7UUFDRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDNUIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUU7U0FDaEMsQ0FBQyxDQUFDLENBQUE7UUFDSCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sV0FBVyxHQUFHLElBQUEsaUJBQVUsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSSxXQUFXLENBQUMsTUFBYyxFQUFFLFVBQWMsRUFBRTtRQUMvQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDcEUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7U0FDL0IsQ0FBQyxDQUFDLENBQUE7UUFDSCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sV0FBVyxHQUFHLElBQUEsaUJBQVUsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxnQkFBZ0IsQ0FBQyxNQUFjO1FBQ2xDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRTtZQUNsRCxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTtTQUMvQixDQUFDLENBQUE7UUFDRixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sV0FBVyxHQUFHLElBQUEsaUJBQVUsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLFVBQVUsQ0FBQyxNQUFjLEVBQUUsVUFBYyxFQUFFO1FBQzlDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNqRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTtTQUMvQixDQUFDLENBQUMsQ0FBQTtRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUMsTUFBTSxXQUFXLEdBQUcsSUFBQSxpQkFBVSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLFVBQVUsQ0FBQyxNQUFjO1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQyxDQUFBO1FBQ25GLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUMsTUFBTSxXQUFXLEdBQUcsSUFBQSxpQkFBVSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7O09BWUc7SUFDSSxTQUFTLENBQUMsTUFBYyxFQUFFLFVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1FBQzFELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNyRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRTtTQUMvQixDQUFDLENBQUMsQ0FBQTtRQUNILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUMsTUFBTSxXQUFXLEdBQUcsSUFBQSxpQkFBVSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQXBMRCxzQkFvTEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4vdXNlckRhdGEnO1xuaW1wb3J0IHsgZnJvbWF0RGF0YSB9IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBjbGFzcyBUcmFkZSBleHRlbmRzIFVzZXJEYXRhIHtcbiAgICAvKipcbiAgICAgKiBUZXN0IE5ldyBPcmRlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSBzeW1ib2wgXG4gICAgICogQHBhcmFtIHNpZGUgXG4gICAgICogQHBhcmFtIG9yZGVyVHlwZSBcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBcbiAgICAgKiBgYGBcbiAgICAgKiBbb3B0aW9ucy50aW1lSW5Gb3JjZV1cbiAgICAgKiBbb3B0aW9ucy5xdWFudGl0eV1cbiAgICAgKiBbb3B0aW9ucy5xdW90ZU9yZGVyUXR5XVxuICAgICAqIFtvcHRpb25zLnByaWNlXVxuICAgICAqIFtvcHRpb25zLm5ld0NsaWVudE9yZGVySWRdIC0gQSB1bmlxdWUgaWQgYW1vbmcgb3BlbiBvcmRlcnMuIEF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGlmIG5vdCBzZW50LlxuICAgICAqIFtvcHRpb25zLnN0b3BQcmljZV0gLSBVc2VkIHdpdGggU1RPUF9MT1NTLCBTVE9QX0xPU1NfTElNSVQsIFRBS0VfUFJPRklULCBhbmQgVEFLRV9QUk9GSVRfTElNSVQgb3JkZXJzLlxuICAgICAqIFtvcHRpb25zLmljZWJlcmdRdHldIC0gVXNlZCB3aXRoIExJTUlULCBTVE9QX0xPU1NfTElNSVQsIGFuZCBUQUtFX1BST0ZJVF9MSU1JVCB0byBjcmVhdGUgYW4gaWNlYmVyZyBvcmRlci5cbiAgICAgKiBbb3B0aW9ucy5uZXdPcmRlclJlc3BUeXBlXSAtIFNldCB0aGUgcmVzcG9uc2UgSlNPTi4gQUNLLCBSRVNVTFQsIG9yIEZVTEw7XG4gICAgICogICAgTUFSS0VUIGFuZCBMSU1JVCBvcmRlciB0eXBlcyBkZWZhdWx0IHRvIEZVTEwsIGFsbCBvdGhlciBvcmRlcnMgZGVmYXVsdCB0byBBQ0suXG4gICAgICogW29wdGlvbnMucmVjdldpbmRvd10gLSBUaGUgdmFsdWUgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiA2MDAwMFxuICAgICAqIGBgYFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBuZXdPcmRlclRlc3QoXG4gICAgICAgIHN5bWJvbDogc3RyaW5nLFxuICAgICAgICBzaWRlOiBzdHJpbmcsXG4gICAgICAgIG9yZGVyVHlwZTogc3RyaW5nLFxuICAgICAgICBvcHRpb25zOiBhbnkgPSB7fVxuICAgICkge1xuICAgICAgICBpZihbc3ltYm9sLCBzaWRlLCBvcmRlclR5cGVdLnNvbWUoc3RyID0+ICFzdHIudHJpbSgpKSkge1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIGBTb21lIHBhcmFtcyBhcmUgcmVxdWlyZWRgKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5zaWduUmVxdWVzdCgnUE9TVCcsICcvb3JkZXIvdGVzdCcsIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICAgICAgc3ltYm9sOiBzeW1ib2wudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgIHNpZGU6IHNpZGUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgIHR5cGU6IG9yZGVyVHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pKVxuICAgICAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICAgICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuICAgIFxuICAgICAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTmV3IE9yZGVyXG4gICAgICogXG4gICAgICogQHBhcmFtIHN5bWJvbCBcbiAgICAgKiBAcGFyYW0gc2lkZSBcbiAgICAgKiBAcGFyYW0gb3JkZXJUeXBlIFxuICAgICAqIEBwYXJhbSBvcHRpb25zIFxuICAgICAqIGBgYFxuICAgICAqIFtvcHRpb25zLnRpbWVJbkZvcmNlXVxuICAgICAqIFtvcHRpb25zLnF1YW50aXR5XVxuICAgICAqIFtvcHRpb25zLnF1b3RlT3JkZXJRdHldXG4gICAgICogW29wdGlvbnMucHJpY2VdXG4gICAgICogW29wdGlvbnMubmV3Q2xpZW50T3JkZXJJZF0gLSBBIHVuaXF1ZSBpZCBhbW9uZyBvcGVuIG9yZGVycy4gQXV0b21hdGljYWxseSBnZW5lcmF0ZWQgaWYgbm90IHNlbnQuXG4gICAgICogW29wdGlvbnMuc3RvcFByaWNlXSAtIFVzZWQgd2l0aCBTVE9QX0xPU1MsIFNUT1BfTE9TU19MSU1JVCwgVEFLRV9QUk9GSVQsIGFuZCBUQUtFX1BST0ZJVF9MSU1JVCBvcmRlcnMuXG4gICAgICogW29wdGlvbnMuaWNlYmVyZ1F0eV0gLSBVc2VkIHdpdGggTElNSVQsIFNUT1BfTE9TU19MSU1JVCwgYW5kIFRBS0VfUFJPRklUX0xJTUlUIHRvIGNyZWF0ZSBhbiBpY2ViZXJnIG9yZGVyLlxuICAgICAqIFtvcHRpb25zLm5ld09yZGVyUmVzcFR5cGVdIC0gU2V0IHRoZSByZXNwb25zZSBKU09OLiBBQ0ssIFJFU1VMVCwgb3IgRlVMTDtcbiAgICAgKiAgICBNQVJLRVQgYW5kIExJTUlUIG9yZGVyIHR5cGVzIGRlZmF1bHQgdG8gRlVMTCwgYWxsIG90aGVyIG9yZGVycyBkZWZhdWx0IHRvIEFDSy5cbiAgICAgKiBbb3B0aW9ucy5yZWN2V2luZG93XSAtIFRoZSB2YWx1ZSBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIDYwMDAwXG4gICAgICogYGBgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIG5ld09yZGVyKFxuICAgICAgICBzeW1ib2w6IHN0cmluZyxcbiAgICAgICAgc2lkZTogc3RyaW5nLFxuICAgICAgICBvcmRlclR5cGU6IHN0cmluZyxcbiAgICAgICAgb3B0aW9uczogYW55ID0ge31cbiAgICApIHtcbiAgICAgICAgaWYoW3N5bWJvbCwgc2lkZSwgb3JkZXJUeXBlXS5zb21lKHN0ciA9PiAhc3RyLnRyaW0oKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBgU29tZSBwYXJhbXMgYXJlIHJlcXVpcmVkYClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcyA9IHRoaXMuc2lnblJlcXVlc3QoJ1BPU1QnLCAnL29yZGVyJywgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgICAgICBzeW1ib2w6IHN5bWJvbC50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgc2lkZTogc2lkZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgdHlwZTogb3JkZXJUeXBlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSkpXG4gICAgICAgIGNvbnN0IHJhd0RhdGEgPSBKU09OLnBhcnNlKHJlcy5nZXRCb2R5KCkpO1xuICAgICAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG4gICAgXG4gICAgICAgIHJldHVybiBmb3JtYXREYXRhcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYW5jZWwgT3JkZXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gc3ltYm9sIFxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICogYGBgXG4gICAgICogW29wdGlvbnMub3JkZXJJZF1cbiAgICAgKiBbb3B0aW9ucy5vcmlnQ2xpZW50T3JkZXJJZF1cbiAgICAgKiBbb3B0aW9ucy5uZXdDbGllbnRPcmRlcklkXVxuICAgICAqIGBgYFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHB1YmxpYyBjYW5jZWxPcmRlcihzeW1ib2w6IHN0cmluZywgb3B0aW9uczphbnkgPSB7fSkge1xuICAgICAgICBjb25zdCByZXMgPSB0aGlzLnNpZ25SZXF1ZXN0KCdERUxFVEUnLCAnL29yZGVyJywgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgICAgICBzeW1ib2w6IHN5bWJvbC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pKVxuICAgICAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICAgICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuICAgIFxuICAgICAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FuY2VsIGFsbCBPcGVuIE9yZGVycyBvbiBhIFN5bWJvbFxuICAgICAqIFxuICAgICAqIEBwYXJhbSBzeW1ib2wgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIGNhbmNlbE9wZW5PcmRlcnMoc3ltYm9sOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5zaWduUmVxdWVzdCgnREVMRVRFJywgJy9vcGVuT3JkZXJzJywge1xuICAgICAgICAgICAgc3ltYm9sOiBzeW1ib2wudG9VcHBlckNhc2UoKVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICAgICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuICAgIFxuICAgICAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlcnkgT3JkZXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gc3ltYm9sIFxuICAgICAqIEBwYXJhbSBvcHRpb25zIFxuICAgICAqIGBgYFxuICAgICAqIFtvcHRpb25zLm9yZGVySWRdIC0gQXQgbGVhc3Qgb25lIG9mIG9yZGVySWQgYW5kIG9yaWdDbGllbnRPcmRlcklkIG5lZWRzIHRvIGJlIHNlbnRcbiAgICAgKiBbb3B0aW9ucy5vcmlnQ2xpZW50T3JkZXJJZF1cbiAgICAgKiBgYGBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwdWJsaWMgcXVlcnlPcmRlcihzeW1ib2w6IHN0cmluZywgb3B0aW9uczphbnkgPSB7fSkge1xuICAgICAgICBjb25zdCByZXMgPSB0aGlzLnNpZ25SZXF1ZXN0KCdHRVQnLCAnL29yZGVyJywgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgICAgICBzeW1ib2w6IHN5bWJvbC50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0pKVxuICAgICAgICBjb25zdCByYXdEYXRhID0gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKTtcbiAgICAgICAgY29uc3QgZm9ybWF0RGF0YXMgPSBmcm9tYXREYXRhKHJhd0RhdGEpO1xuICAgIFxuICAgICAgICByZXR1cm4gZm9ybWF0RGF0YXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VycmVudCBPcGVuIE9yZGVyc1xuICAgICAqIFxuICAgICAqIEBwYXJhbSBzeW1ib2wgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIG9wZW5PcmRlcnMoc3ltYm9sOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5zaWduUmVxdWVzdCgnR0VUJywgJy9vcGVuT3JkZXJzJywgeyBzeW1ib2w6IHN5bWJvbC50b1VwcGVyQ2FzZSgpfSlcbiAgICAgICAgY29uc3QgcmF3RGF0YSA9IEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSk7XG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGFzID0gZnJvbWF0RGF0YShyYXdEYXRhKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGZvcm1hdERhdGFzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbCBPcmRlcnNcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gc3ltYm9sIFxuICAgICAqIEBwYXJhbSBvcHRpb25zIFxuICAgICAqIGBgYFxuICAgICAqIFtvcHRpb25zLm9yZGVySWRdIC0gSWYgc3RhcnRUaW1lIGFuZCBlbmRUaW1lIGFyZSBzZXQsIG9yZGVySWQgZG9lcyBub3QgbmVlZCB0byBiZSBzZXRcbiAgICAgKiBbb3B0aW9ucy5zdGFydFRpbWVdXG4gICAgICogW29wdGlvbnMuZW5kVGltZV1cbiAgICAgKiBbb3B0aW9ucy5saW1pdF0gLSB2YWx1ZSBiZXR3ZWVuIDEgYW5kIDEwMDAsIGRlZmF1bHQgaXMgNTAwXG4gICAgICogYGBgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIGFsbE9yZGVycyhzeW1ib2w6IHN0cmluZywgb3B0aW9uczogYW55ID0geyBsaW1pdDogNTAwIH0pIHtcbiAgICAgICAgY29uc3QgcmVzID0gdGhpcy5zaWduUmVxdWVzdCgnR0VUJywgJy9hbGxPcmRlcnMnLCBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgICAgIHN5bWJvbDogc3ltYm9sLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSkpXG4gICAgICAgIGNvbnN0IHJhd0RhdGEgPSBKU09OLnBhcnNlKHJlcy5nZXRCb2R5KCkpO1xuICAgICAgICBjb25zdCBmb3JtYXREYXRhcyA9IGZyb21hdERhdGEocmF3RGF0YSk7XG4gICAgXG4gICAgICAgIHJldHVybiBmb3JtYXREYXRhcztcbiAgICB9XG59Il19