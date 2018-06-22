"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("../Game");
exports.ActionHandler = function (actionName) { return ({
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === actionName + "Action";
    },
    handle: function (handlerInput) {
        var GAME = new Game_1.Game(handlerInput);
        var int = GAME.session.getNewInt();
        var action = GAME.controls.getAction() || 'no action';
        var speak = 'action ' + actionName + ' ' + int + ' ' + action;
        return handlerInput.responseBuilder
            .speak(speak)
            .withSimpleCard(GAME.skillName(), speak)
            .withShouldEndSession(false)
            .reprompt('Qué ?')
            .getResponse();
    }
}); };
exports.TakeActionHandler = exports.ActionHandler('Take');
exports.ThrowActionHandler = exports.ActionHandler('Throw');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsZ0NBQThCO0FBRWpCLFFBQUEsYUFBYSxHQUFHLFVBQUMsVUFBa0IsSUFBSyxPQUFBLENBQUM7SUFDcEQsU0FBUyxFQUFULFVBQVcsWUFBZ0M7UUFDekMsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUE7UUFDcEQsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLGVBQWUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBUSxVQUFVLFdBQVEsQ0FBQTtJQUMxRixDQUFDO0lBQ0QsTUFBTSxFQUFOLFVBQVEsWUFBZ0M7UUFFdEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDbkMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLFdBQVcsQ0FBQTtRQUV2RCxJQUFNLEtBQUssR0FBRyxTQUFTLEdBQUcsVUFBVSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQTtRQUUvRCxPQUFPLFlBQVksQ0FBQyxlQUFlO2FBQ2hDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQzthQUN2QyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7YUFDM0IsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUNqQixXQUFXLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0NBQ0YsQ0FBQyxFQXBCbUQsQ0FvQm5ELENBQUE7QUFFVyxRQUFBLGlCQUFpQixHQUFHLHFCQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7QUFFekMsUUFBQSxrQkFBa0IsR0FBRyxxQkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBIn0=