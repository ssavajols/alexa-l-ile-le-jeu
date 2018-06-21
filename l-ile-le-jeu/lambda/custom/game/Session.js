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
    Session.prototype.getNewInt = function () {
        var int = typeof this.getAttribute('int') === 'number' ? this.getAttribute('int') + 1 : 1;
        this.setAttribute('int', int);
        return int;
    };
    return Session;
}());
exports.Session = Session;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUlFLGlCQUFhLFlBQWdDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLGlCQUFpQixDQUFBO0lBQ2hELENBQUM7SUFFTSw4QkFBWSxHQUFuQixVQUFxQixJQUFZO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFTSw4QkFBWSxHQUFuQixVQUFxQixJQUFZLEVBQUUsS0FBVTtRQUMzQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFFakQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQTtRQUVsQixJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFTSwyQkFBUyxHQUFoQjtRQUNFLElBQU0sR0FBRyxHQUFHLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDM0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDN0IsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksMEJBQU8ifQ==