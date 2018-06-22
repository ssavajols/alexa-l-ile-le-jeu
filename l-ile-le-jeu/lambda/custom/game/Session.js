"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Session = /** @class */ (function () {
    function Session(handlerInput) {
        this._session = handlerInput.attributesManager;
    }
    Session.prototype.getAttribute = function (name) {
        return this._session.getSessionAttributes()[name];
    };
    Session.prototype.setAttribute = function (name, value) {
        var attr = this._session.getSessionAttributes();
        attr[name] = value;
        this._session.setSessionAttributes(attr);
    };
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUlFLGlCQUFhLFlBQWdDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGlCQUFpQixDQUFBO0lBQ2hELENBQUM7SUFFTSw4QkFBWSxHQUFuQixVQUFxQixJQUFZO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFTSw4QkFBWSxHQUFuQixVQUFxQixJQUFZLEVBQUUsS0FBVTtRQUMzQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFFakQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQTtRQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSwwQkFBTyJ9