"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("../game");
exports.WelcomeHandler = {
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    },
    handle: function (handlerInput) {
        var GAME = new game_1.Game(handlerInput);
        var speak = GAME.getSpeech();
        return handlerInput.responseBuilder
            .speak(speak)
            .withSimpleCard(GAME.skillName(), speak)
            .withShouldEndSession(GAME.isEnd)
            .reprompt('Qué ?')
            .getResponse();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlbGNvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxnQ0FBOEI7QUFFakIsUUFBQSxjQUFjLEdBQUc7SUFDNUIsU0FBUyxFQUFULFVBQVcsWUFBZ0M7UUFDekMsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUE7UUFDcEQsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQTtJQUN6QyxDQUFDO0lBQ0QsTUFBTSxFQUFOLFVBQVEsWUFBZ0M7UUFDdEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFbkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRTlCLE9BQU8sWUFBWSxDQUFDLGVBQWU7YUFDaEMsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDO2FBQ3ZDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUNqQixXQUFXLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0NBQ0YsQ0FBQSJ9