"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("../game");
exports.MoveHandler = {
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Move';
    },
    handle: function (handlerInput) {
        var GAME = new game_1.Game(handlerInput, 'Move');
        var speak = GAME.getSpeech();
        return handlerInput.responseBuilder
            .speak(speak)
            .withSimpleCard(GAME.skillName(), speak)
            .withShouldEndSession(false)
            .reprompt('Qué ?')
            .getResponse();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxnQ0FBOEI7QUFFakIsUUFBQSxXQUFXLEdBQUc7SUFDekIsU0FBUyxFQUFULFVBQVcsWUFBZ0M7UUFDekMsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUE7UUFDcEQsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLGVBQWUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUE7SUFDM0UsQ0FBQztJQUNELE1BQU0sRUFBTixVQUFRLFlBQWdDO1FBQ3RDLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUUzQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFFOUIsT0FBTyxZQUFZLENBQUMsZUFBZTthQUNoQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUM7YUFDdkMsb0JBQW9CLENBQUMsS0FBSyxDQUFDO2FBQzNCLFFBQVEsQ0FBQyxPQUFPLENBQUM7YUFDakIsV0FBVyxFQUFFLENBQUE7SUFDbEIsQ0FBQztDQUNGLENBQUEifQ==