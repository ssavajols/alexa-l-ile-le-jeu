"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controls = /** @class */ (function () {
    function Controls(handlerInput) {
        try {
            this._slots = handlerInput.requestEnvelope.request.intent.slots;
        }
        catch (err) {
            this._slots = {};
        }
    }
    Controls.prototype.getAction = function () {
        return this._slotValue('action');
    };
    Controls.prototype.getDirection = function () {
        return this._slotValue('direction');
    };
    Controls.prototype._slotValue = function (slotName) {
        return this._slots && this._slots[slotName] ? this._slots[slotName].value : null;
    };
    return Controls;
}());
exports.Controls = Controls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBSUUsa0JBQWEsWUFBZ0M7UUFDM0MsSUFBSTtZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUksWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtTQUN6RTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7U0FDakI7SUFDSCxDQUFDO0lBRU0sNEJBQVMsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVNLCtCQUFZLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFFTyw2QkFBVSxHQUFsQixVQUFvQixRQUFnQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUNsRixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksNEJBQVEifQ==