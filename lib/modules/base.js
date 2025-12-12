"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
const util_1 = require("../util");
const crypto = __importStar(require("crypto"));
class Base {
    constructor(apiKey, apiSecret) {
        this.config = {};
        this.config.apiKey = apiKey;
        this.config.apiSecret = apiSecret;
        this.config.baseURL = 'https://api.mexc.com/api/v3';
    }
    publicRequest(method, path, paramsObj = {}) {
        paramsObj = (0, util_1.removeEmptyValue)(paramsObj);
        paramsObj = (0, util_1.buildQueryString)(paramsObj);
        if (paramsObj !== '') {
            path = `${path}?${paramsObj}`;
        }
        return (0, util_1.createRequest)({
            method: method,
            baseURL: this.config.baseURL,
            url: path,
            headers: {
                'Content-Type': 'application/json',
                'X-MEXC-APIKEY': this.config.apiKey
            }
        });
    }
    signRequest(method, path, paramsObj = {}) {
        const timestamp = Date.now();
        paramsObj = (0, util_1.removeEmptyValue)(paramsObj);
        const queryString = (0, util_1.buildQueryString)({ ...paramsObj, timestamp });
        const signature = crypto
            .createHmac('sha256', this.config.apiSecret)
            .update(queryString)
            .digest('hex');
        return (0, util_1.createRequest)({
            method: method,
            baseURL: this.config.baseURL,
            url: `${path}?${queryString}&signature=${signature}`,
            headers: {
                'Content-Type': 'application/json',
                'X-MEXC-APIKEY': this.config.apiKey
            }
        });
    }
}
exports.Base = Base;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0NBQTRFO0FBQzVFLCtDQUFpQztBQUVqQyxNQUFhLElBQUk7SUFFZixZQUFZLE1BQWMsRUFBRSxTQUFpQjtRQUR0QyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLENBQUM7SUFDdEQsQ0FBQztJQUVNLGFBQWEsQ0FBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLFlBQWlCLEVBQUU7UUFDckUsU0FBUyxHQUFHLElBQUEsdUJBQWdCLEVBQUMsU0FBUyxDQUFDLENBQUE7UUFDdkMsU0FBUyxHQUFHLElBQUEsdUJBQWdCLEVBQUMsU0FBUyxDQUFDLENBQUE7UUFDdkMsSUFBRyxTQUFTLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDcEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLFNBQVMsRUFBRSxDQUFBO1FBQy9CLENBQUM7UUFFRCxPQUFPLElBQUEsb0JBQWEsRUFBQztZQUNuQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDNUIsR0FBRyxFQUFFLElBQUk7WUFDVCxPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNwQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTSxXQUFXLENBQUMsTUFBYyxFQUFFLElBQVksRUFBRSxZQUFpQixFQUFFO1FBQ2xFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUM1QixTQUFTLEdBQUcsSUFBQSx1QkFBZ0IsRUFBQyxTQUFTLENBQUMsQ0FBQTtRQUN2QyxNQUFNLFdBQVcsR0FBRyxJQUFBLHVCQUFnQixFQUFDLEVBQUUsR0FBRyxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUNqRSxNQUFNLFNBQVMsR0FBRyxNQUFNO2FBQ25CLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDM0MsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFbEIsT0FBTyxJQUFBLG9CQUFhLEVBQUM7WUFDbkIsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQzVCLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxXQUFXLGNBQWMsU0FBUyxFQUFFO1lBQ3BELE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ3BDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBN0NELG9CQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJ1aWxkUXVlcnlTdHJpbmcsIGNyZWF0ZVJlcXVlc3QsIHJlbW92ZUVtcHR5VmFsdWUgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCAqIGFzIGNyeXB0byBmcm9tICdjcnlwdG8nO1xuXG5leHBvcnQgY2xhc3MgQmFzZSB7XG4gIHB1YmxpYyBjb25maWc6IGFueSA9IHt9O1xuICBjb25zdHJ1Y3RvcihhcGlLZXk6IHN0cmluZywgYXBpU2VjcmV0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbmZpZy5hcGlLZXkgPSBhcGlLZXk7XG4gICAgdGhpcy5jb25maWcuYXBpU2VjcmV0ID0gYXBpU2VjcmV0O1xuICAgIHRoaXMuY29uZmlnLmJhc2VVUkwgPSAnaHR0cHM6Ly9hcGkubWV4Yy5jb20vYXBpL3YzJztcbiAgfVxuXG4gIHB1YmxpYyBwdWJsaWNSZXF1ZXN0IChtZXRob2Q6IHN0cmluZywgcGF0aDogc3RyaW5nLCBwYXJhbXNPYmo6IGFueSA9IHt9KTogYW55IHtcbiAgICBwYXJhbXNPYmogPSByZW1vdmVFbXB0eVZhbHVlKHBhcmFtc09iailcbiAgICBwYXJhbXNPYmogPSBidWlsZFF1ZXJ5U3RyaW5nKHBhcmFtc09iailcbiAgICBpZihwYXJhbXNPYmogIT09ICcnKSB7XG4gICAgICBwYXRoID0gYCR7cGF0aH0/JHtwYXJhbXNPYmp9YFxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVSZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgYmFzZVVSTDogdGhpcy5jb25maWcuYmFzZVVSTCxcbiAgICAgIHVybDogcGF0aCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1gtTUVYQy1BUElLRVknOiB0aGlzLmNvbmZpZy5hcGlLZXlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHNpZ25SZXF1ZXN0KG1ldGhvZDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHBhcmFtc09iajogYW55ID0ge30pOiBhbnkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgICBwYXJhbXNPYmogPSByZW1vdmVFbXB0eVZhbHVlKHBhcmFtc09iailcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmcoeyAuLi5wYXJhbXNPYmosIHRpbWVzdGFtcCB9KVxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGNyeXB0b1xuICAgICAgICAuY3JlYXRlSG1hYygnc2hhMjU2JywgdGhpcy5jb25maWcuYXBpU2VjcmV0KVxuICAgICAgICAudXBkYXRlKHF1ZXJ5U3RyaW5nKVxuICAgICAgICAuZGlnZXN0KCdoZXgnKVxuXG4gICAgcmV0dXJuIGNyZWF0ZVJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBiYXNlVVJMOiB0aGlzLmNvbmZpZy5iYXNlVVJMLFxuICAgICAgdXJsOiBgJHtwYXRofT8ke3F1ZXJ5U3RyaW5nfSZzaWduYXR1cmU9JHtzaWduYXR1cmV9YCxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ1gtTUVYQy1BUElLRVknOiB0aGlzLmNvbmZpZy5hcGlLZXlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59Il19