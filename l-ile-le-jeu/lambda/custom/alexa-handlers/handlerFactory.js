"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var game_1 = require("../game");
/* tslint:enable */
var HandlerFactory = /** @class */ (function () {
    function HandlerFactory() {
    }
    HandlerFactory.createFromJson = function () {
        var handlersJSON = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, './handlers.json')).toString());
        var handlers = [];
        handlersJSON.map(function (handler) {
            handlers.push(HandlerFactory.create(handler.intentName, handler.actionType));
        });
        return handlers;
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYW5kbGVyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlCQUFtQjtBQUNuQiw2QkFBdUI7QUFDdkIsZ0NBQThCO0FBVTlCLG1CQUFtQjtBQUNuQjtJQUFBO0lBa0RBLENBQUM7SUFqRGUsNkJBQWMsR0FBNUI7UUFDRSxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUM3QixZQUFFLENBQUMsWUFBWSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FDcEUsQ0FBQTtRQUVELElBQU0sUUFBUSxHQUFVLEVBQUUsQ0FBQTtRQUMxQixZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBTztZQUN2QixRQUFRLENBQUMsSUFBSSxDQUNYLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQzlELENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sUUFBUSxDQUFBO0lBQ2pCLENBQUM7SUFFYSxxQkFBTSxHQUFwQixVQUNFLFVBQThCLEVBQzlCLFVBQVUsRUFDVixRQUFTO1FBRVQsT0FBTztZQUNMLFNBQVMsRUFBVCxVQUFXLFlBQWdDO2dCQUN6QyxJQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDLE9BQXdCLENBQUE7Z0JBQ3JFLElBQUksT0FBTyxVQUFVLEtBQUssU0FBUztvQkFBRSxPQUFPLFVBQVUsQ0FBQTtnQkFFdEQsT0FBTyxDQUNMLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxlQUFlO29CQUMvQixPQUFPLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQztvQkFDbkMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMvQyxDQUFBO1lBQ0gsQ0FBQztZQUNELE1BQU0sRUFBTixVQUNFLFlBQWdDLEVBQ2hDLEtBQUs7Z0JBRUwsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFBO2dCQUMvQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFFcEQsT0FBTyxRQUFRO29CQUNiLENBQUMsQ0FBQyxRQUFRO29CQUNWLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZTt5QkFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5QkFDdkIsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7eUJBQ2xELG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7eUJBQzFCLFdBQVcsRUFBRSxDQUFBO1lBQ3RCLENBQUM7U0FDRixDQUFBO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWxEWSx3Q0FBYyJ9