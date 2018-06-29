"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var QuestionMissingIdError = /** @class */ (function (_super) {
    __extends(QuestionMissingIdError, _super);
    function QuestionMissingIdError() {
        var _this = _super.call(this) || this;
        _this.message = 'provide a question ID';
        return _this;
    }
    return QuestionMissingIdError;
}(Error));
exports.QuestionMissingIdError = QuestionMissingIdError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25NaXNzaW5nSWRFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlF1ZXN0aW9uTWlzc2luZ0lkRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7SUFBNEMsMENBQUs7SUFDL0M7UUFBQSxZQUNFLGlCQUFPLFNBRVI7UUFEQyxLQUFJLENBQUMsT0FBTyxHQUFHLHVCQUF1QixDQUFBOztJQUN4QyxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsS0FBSyxHQUtoRDtBQUxZLHdEQUFzQiJ9