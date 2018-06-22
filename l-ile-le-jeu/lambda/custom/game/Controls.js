"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controls = /** @class */ (function () {
    function Controls(handlerInput, _actionType) {
        this._actionType = _actionType || '';
        try {
            this._slots = handlerInput.requestEnvelope.request.intent.slots;
        }
        catch (err) {
            this._slots = {};
        }
    }
    Controls.prototype.getAction = function () {
        var actionType = this._actionType;
        var actionName = this._slotValue('action');
        if (actionName && actionType) {
            return actionType.toUpperCase() + "_" + actionName.toUpperCase();
        }
        else if (actionName) {
            return "" + actionName.toUpperCase();
        }
        return null;
    };
    Controls.prototype._slotValue = function (slotName) {
        return this._slots && this._slots[slotName] ? this._slots[slotName].value : null;
    };
    return Controls;
}());
exports.Controls = Controls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBTUUsa0JBQWEsWUFBZ0MsRUFBRSxXQUFvQjtRQUVqRSxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsSUFBSSxFQUFFLENBQUE7UUFFcEMsSUFBSTtZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUksWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtTQUN6RTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7U0FDakI7SUFDSCxDQUFDO0lBRU0sNEJBQVMsR0FBaEI7UUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFBO1FBQ25DLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFNUMsSUFBSSxVQUFVLElBQUksVUFBVSxFQUFFO1lBQzVCLE9BQVUsVUFBVSxDQUFDLFdBQVcsRUFBRSxTQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUksQ0FBQTtTQUNqRTthQUFNLElBQUksVUFBVSxFQUFFO1lBQ3JCLE9BQU8sS0FBRyxVQUFVLENBQUMsV0FBVyxFQUFJLENBQUE7U0FDckM7UUFFRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFTyw2QkFBVSxHQUFsQixVQUFvQixRQUFnQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUNsRixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFqQ1ksNEJBQVEifQ==