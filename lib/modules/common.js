"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = void 0;
const market_1 = require("./market");
class Common extends market_1.Market {
    /**
     * Test Connectivity
     */
    ping() {
        const res = this.publicRequest('GET', '/ping');
        return JSON.parse(res.getBody());
    }
    /**
     * Check Server Time
     */
    time() {
        const res = this.publicRequest('GET', '/time');
        return JSON.parse(res.getBody());
    }
}
exports.Common = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZXMvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFrQztBQUVsQyxNQUFhLE1BQU8sU0FBUSxlQUFNO0lBQ2hDOztPQUVHO0lBQ0ksSUFBSTtRQUNULE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxJQUFJO1FBQ1QsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDOUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Q0FDRjtBQWhCRCx3QkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXJrZXQgfSBmcm9tICcuL21hcmtldCc7XG5cbmV4cG9ydCBjbGFzcyBDb21tb24gZXh0ZW5kcyBNYXJrZXQge1xuICAvKipcbiAgICogVGVzdCBDb25uZWN0aXZpdHlcbiAgICovXG4gIHB1YmxpYyBwaW5nKCkge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMucHVibGljUmVxdWVzdCgnR0VUJywgJy9waW5nJylcbiAgICByZXR1cm4gSlNPTi5wYXJzZShyZXMuZ2V0Qm9keSgpKVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIFNlcnZlciBUaW1lXG4gICAqL1xuICBwdWJsaWMgdGltZSgpIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLnB1YmxpY1JlcXVlc3QoJ0dFVCcsICcvdGltZScpXG4gICAgcmV0dXJuIEpTT04ucGFyc2UocmVzLmdldEJvZHkoKSlcbiAgfVxufSJdfQ==