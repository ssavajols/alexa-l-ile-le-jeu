"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("../game");
var HandlerFactory = /** @class */ (function () {
    function HandlerFactory() {
    }
    HandlerFactory.create = function (intentName, actionType, onHandle) {
        return {
            canHandle: function (handlerInput) {
                var request = handlerInput.requestEnvelope.request;
                if (typeof intentName === 'boolean')
                    return intentName;
                return ((request.type === 'IntentRequest' ||
                    request.type === 'LaunchRequest') &&
                    intentName.indexOf(request.intent.name) !== -1);
            },
            handle: function (handlerInput, error) {
                var GAME = new game_1.Game(handlerInput, actionType);
                var response = onHandle(error, handlerInput, GAME);
                return response
                    ? response
                    : handlerInput.responseBuilder
                        .speak(GAME.getSpeech())
                        .withSimpleCard(GAME.skillName(), GAME.getSpeech())
                        .withShouldEndSession(GAME.isEnd)
                        .reprompt(GAME.getSpeech())
                        .getResponse();
            }
        };
    };
    return HandlerFactory;
}());
exports.HandlerFactory = HandlerFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYW5kbGVyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGdDQUE4QjtBQUU5QjtJQUFBO0lBbUNBLENBQUM7SUFsQ2UscUJBQU0sR0FBcEIsVUFDRSxVQUE4QixFQUM5QixVQUFVLEVBQ1YsUUFBUztRQUVULE9BQU87WUFDTCxTQUFTLEVBQVQsVUFBVyxZQUFnQztnQkFDekMsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUF3QixDQUFBO2dCQUNyRSxJQUFJLE9BQU8sVUFBVSxLQUFLLFNBQVM7b0JBQUUsT0FBTyxVQUFVLENBQUE7Z0JBRXRELE9BQU8sQ0FDTCxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssZUFBZTtvQkFDL0IsT0FBTyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUM7b0JBQ25DLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDL0MsQ0FBQTtZQUNILENBQUM7WUFDRCxNQUFNLEVBQU4sVUFDRSxZQUFnQyxFQUNoQyxLQUFLO2dCQUVMLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQTtnQkFDL0MsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBRXBELE9BQU8sUUFBUTtvQkFDYixDQUFDLENBQUMsUUFBUTtvQkFDVixDQUFDLENBQUMsWUFBWSxDQUFDLGVBQWU7eUJBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7eUJBQ3ZCLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lCQUNsRCxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3lCQUNoQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3lCQUMxQixXQUFXLEVBQUUsQ0FBQTtZQUN0QixDQUFDO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7QUFuQ1ksd0NBQWMifQ==