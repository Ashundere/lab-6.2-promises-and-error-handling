"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSalesReport = exports.fetchProductReviews = exports.fetchProductCatalog = void 0;
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ValidationError";
        return _this;
    }
    return ValidationError;
}(Error));
var DataError = /** @class */ (function (_super) {
    __extends(DataError, _super);
    function DataError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "DataError";
        return _this;
    }
    return DataError;
}(Error));
var fetchProductCatalog = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject(new ValidationError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
var fetchProductReviews = function (productId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Devon", comment: "It works great!" },
                    { id: 1, name: "Anthony", comment: "I hate it." },
                    { id: 2, name: "Damian", comment: "Great Volume!" },
                    { id: 2, name: "Tim", comment: "They look cool." },
                ]);
            }
            else {
                reject(new DataError("Failed to fetch reviews for product ID ".concat(productId)));
            }
        }, 1500);
    });
};
exports.fetchProductReviews = fetchProductReviews;
var fetchSalesReport = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() < 0.8) {
                resolve([
                    { totalSales: 500, unitsSold: 20, averagePrice: 25 },
                    { totalSales: 200, unitsSold: 20, averagePrice: 10 },
                ]);
            }
            else {
                reject(new ValidationError("Failed to fetch sales report"));
            }
        }, 1500);
    });
};
exports.fetchSalesReport = fetchSalesReport;
