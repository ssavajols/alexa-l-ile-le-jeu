"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("../game");
exports.HelpHandler = {
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle: function (handlerInput) {
        var GAME = new game_1.Game(handlerInput);
        return handlerInput.responseBuilder
            .speak(GAME.help())
            .reprompt(GAME.help())
            .withShouldEndSession(GAME.isEnd)
            .getResponse();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxnQ0FBOEI7QUFFakIsUUFBQSxXQUFXLEdBQUc7SUFDekIsU0FBUyxZQUFFLFlBQWdDO1FBQ3pDLElBQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFBO1FBQ3BELE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxlQUFlO2VBQ2xDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFBO0lBQ2xELENBQUM7SUFDRCxNQUFNLFlBQUUsWUFBZ0M7UUFFdEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFbkMsT0FBTyxZQUFZLENBQUMsZUFBZTthQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckIsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNoQyxXQUFXLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0NBQ0YsQ0FBQSJ9