"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handlerFactory_1 = require("./handlerFactory");
exports.HelpHandler = handlerFactory_1.HandlerFactory.create(['AMAZON.HelpIntent'], '', function (error, handlerInput, GAME) {
    if (error)
        return false;
    return handlerInput.responseBuilder
        .speak(GAME.help())
        .reprompt(GAME.help())
        .withShouldEndSession(GAME.isEnd)
        .getResponse();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBaUQ7QUFFcEMsUUFBQSxXQUFXLEdBQUcsK0JBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSTtJQUNwRyxJQUFJLEtBQUs7UUFBRSxPQUFPLEtBQUssQ0FBQTtJQUV2QixPQUFPLFlBQVksQ0FBQyxlQUFlO1NBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQixvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2hDLFdBQVcsRUFBRSxDQUFBO0FBQ3BCLENBQUMsQ0FBQyxDQUFBIn0=