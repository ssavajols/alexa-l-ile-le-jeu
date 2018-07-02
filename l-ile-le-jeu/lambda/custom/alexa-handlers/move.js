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
        var speak = GAME.getSpeech() + ' --- ' + GAME.controls.getAction();
        return handlerInput.responseBuilder
            .speak(speak)
            .withSimpleCard(GAME.skillName(), speak)
            .withShouldEndSession(GAME.isEnd)
            .reprompt('Qué ?')
            .getResponse();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxnQ0FBOEI7QUFFakIsUUFBQSxXQUFXLEdBQUc7SUFDekIsU0FBUyxFQUFULFVBQVcsWUFBZ0M7UUFDekMsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUE7UUFDcEQsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLGVBQWUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUE7SUFDM0UsQ0FBQztJQUNELE1BQU0sRUFBTixVQUFRLFlBQWdDO1FBQ3RDLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUUzQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUE7UUFFcEUsT0FBTyxZQUFZLENBQUMsZUFBZTthQUNoQyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ1osY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUM7YUFDdkMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNoQyxRQUFRLENBQUMsT0FBTyxDQUFDO2FBQ2pCLFdBQVcsRUFBRSxDQUFBO0lBQ2xCLENBQUM7Q0FDRixDQUFBIn0=