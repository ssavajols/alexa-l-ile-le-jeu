"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("../game");
exports.ActionHandler = function (actionType) { return ({
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === actionType + "Action";
    },
    handle: function (handlerInput) {
        var GAME = new game_1.Game(handlerInput, actionType);
        var speak = GAME.getSpeech() + ' --- ' + GAME.controls.getAction();
        return handlerInput.responseBuilder
            .speak(speak)
            .withSimpleCard(GAME.skillName(), speak)
            .withShouldEndSession(GAME.isEnd)
            .reprompt('Qué ?')
            .getResponse();
    }
}); };
exports.TakeActionHandler = exports.ActionHandler('Take');
exports.ThrowActionHandler = exports.ActionHandler('Throw');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsZ0NBQThCO0FBRWpCLFFBQUEsYUFBYSxHQUFHLFVBQUMsVUFBa0IsSUFBSyxPQUFBLENBQUM7SUFDcEQsU0FBUyxFQUFULFVBQVcsWUFBZ0M7UUFDekMsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUE7UUFDcEQsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLGVBQWUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBUSxVQUFVLFdBQVEsQ0FBQTtJQUMxRixDQUFDO0lBQ0QsTUFBTSxFQUFOLFVBQVEsWUFBZ0M7UUFFdEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBRS9DLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUVwRSxPQUFPLFlBQVksQ0FBQyxlQUFlO2FBQ2hDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQzthQUN2QyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDakIsV0FBVyxFQUFFLENBQUE7SUFDbEIsQ0FBQztDQUNGLENBQUMsRUFsQm1ELENBa0JuRCxDQUFBO0FBRVcsUUFBQSxpQkFBaUIsR0FBRyxxQkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRXpDLFFBQUEsa0JBQWtCLEdBQUcscUJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSJ9