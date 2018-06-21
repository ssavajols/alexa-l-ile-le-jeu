"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alexa = require("ask-sdk-core");
var game_1 = require("./game");
var log = console.log;
var WelcomeHandler = {
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    },
    handle: function (handlerInput) {
        var GAME = new game_1.Game(handlerInput);
        var int = GAME.session.getNewInt();
        var speak = 'welcome ' + int;
        return handlerInput.responseBuilder
            .speak(speak)
            .withSimpleCard(GAME.skillName(), speak)
            .withShouldEndSession(false)
            .reprompt('Qué ?')
            .getResponse();
    }
};
var MoveHandler = {
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
var ActionHandler = function (actionName) { return ({
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === actionName + "Action";
    },
    handle: function (handlerInput) {
        var GAME = new game_1.Game(handlerInput);
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
var TakeActionHandler = ActionHandler('Take');
var ThrowActionHandler = ActionHandler('Throw');
var UnhandleHandler = {
    canHandle: function () {
        return true;
    },
    handle: function (handlerInput) {
        var GAME = new game_1.Game(handlerInput);
        return handlerInput.responseBuilder
            .speak(GAME.fallback())
            .withSimpleCard(GAME.skillName(), GAME.fallback())
            .reprompt(GAME.fallback())
            .withShouldEndSession(false)
            .getResponse();
    }
};
var HelpHandler = {
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
            .withShouldEndSession(false)
            .getResponse();
    }
};
var ExitHandler = {
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && (request.intent.name === 'AMAZON.CancelIntent'
                || request.intent.name === 'AMAZON.StopIntent');
    },
    handle: function (handlerInput) {
        var GAME = new game_1.Game(handlerInput);
        return handlerInput.responseBuilder
            .speak(GAME.stop())
            .getResponse();
    }
};
var SessionEndedRequestHandler = {
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle: function (handlerInput) {
        log("Session ended with reason: " + handlerInput.requestEnvelope.request.reason);
        return handlerInput.responseBuilder.getResponse();
    }
};
var ErrorHandler = {
    canHandle: function () {
        return true;
    },
    handle: function (handlerInput, error) {
        log("Error handled: " + error.message);
        return handlerInput.responseBuilder
            .speak('Sorry, an error occurred.')
            .reprompt('Sorry, an error occurred.')
            .withShouldEndSession(false)
            .getResponse();
    }
};
var skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
    .addRequestHandlers(WelcomeHandler, MoveHandler, TakeActionHandler, ThrowActionHandler, HelpHandler, ExitHandler, SessionEndedRequestHandler, UnhandleHandler)
    .addErrorHandlers(ErrorHandler)
    .lambda();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUFxQztBQUVyQywrQkFBNkI7QUFFckIsSUFBQSxpQkFBRyxDQUFZO0FBRXZCLElBQU0sY0FBYyxHQUFHO0lBQ3JCLFNBQVMsRUFBVCxVQUFXLFlBQWdDO1FBQ3pDLElBQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFBO1FBQ3BELE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUE7SUFDekMsQ0FBQztJQUNELE1BQU0sRUFBTixVQUFRLFlBQWdDO1FBQ3RDLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ25DLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUE7UUFFcEMsSUFBTSxLQUFLLEdBQUcsVUFBVSxHQUFHLEdBQUcsQ0FBQTtRQUU5QixPQUFPLFlBQVksQ0FBQyxlQUFlO2FBQ2hDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDWixjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQzthQUN2QyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7YUFDM0IsUUFBUSxDQUFDLE9BQU8sQ0FBQzthQUNqQixXQUFXLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0NBQ0YsQ0FBQTtBQUVELElBQU0sV0FBVyxHQUFHO0lBQ2xCLFNBQVMsRUFBVCxVQUFXLFlBQWdDO1FBQ3pDLElBQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFBO1FBQ3BELE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxlQUFlLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFBO0lBQzNFLENBQUM7SUFDRCxNQUFNLEVBQU4sVUFBUSxZQUFnQztRQUN0QyxJQUFNLElBQUksR0FB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