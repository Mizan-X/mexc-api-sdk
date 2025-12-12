"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spot = void 0;
const trade_1 = require("./trade");
class Spot extends trade_1.Trade {
    constructor(apiKey = '', apiSecret = '') {
        super(apiKey, apiSecret);
    }
}
exports.Spot = Spot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL3Nwb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQStCO0FBRS9CLE1BQWEsSUFBSyxTQUFRLGFBQUs7SUFDM0IsWUFBWSxNQUFNLEdBQUcsRUFBRSxFQUFFLFNBQVMsR0FBRyxFQUFFO1FBQ25DLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDNUIsQ0FBQztDQUNKO0FBSkQsb0JBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFkZSB9IGZyb20gJy4vdHJhZGUnXG5cbmV4cG9ydCBjbGFzcyBTcG90IGV4dGVuZHMgVHJhZGUge1xuICAgIGNvbnN0cnVjdG9yKGFwaUtleSA9ICcnLCBhcGlTZWNyZXQgPSAnJykge1xuICAgICAgICBzdXBlcihhcGlLZXksIGFwaVNlY3JldClcbiAgICB9XG59Il19