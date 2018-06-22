"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("../game");
exports.MoveHandler = {
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'Move';
    },
    handle: function (handlerInput) {
        var GAME = new game_1.Game(handlerInput);
        var int = GAME.session.getNewInt();
        var action = GAME.controls.getDirection() || 'no direction';
        var speak = 'direction ' + int + ' ' + action;
        return handlerInput.responseBuilder
            .speak(speak)
            .withSimpleCard(GAME.skillName(), speak)
            .withShouldEndSession(false)
            .reprompt('Qué ?')
            .getResponse();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxnQ0FBOEI7QUFFakIsUUFBQSxXQUFXLEdBQUc7SUFDekIsU0FBUyxFQUFULFVBQVcsWUFBZ0M7UUFDekMsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUE7UUFDcEQsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLGVBQWUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUE7SUFDM0UsQ0FBQztJQUNELE1BQU0sRUFBTixVQUFRLFlBQWdDO1FBQ3RDLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ25DLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDcEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxjQUFjLENBQUE7UUFFN0QsSUFBTSxLQUFLLEdBQUcsWUFBWSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFBO1FBRS9DLE9BQU8sWUFBWSxDQUFDLGVBQWU7YUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDO2FBQ3ZDLG9CQUFvQixDQUFDLEtBQUssQ0FBQzthQUMzQixRQUFRLENBQUMsT0FBTyxDQUFDO2FBQ2pCLFdBQVcsRUFBRSxDQUFBO0lBQ2xCLENBQUM7Q0FDRixDQUFBIn0=