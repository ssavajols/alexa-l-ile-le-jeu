"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alexa = require("ask-sdk-core");
var alexa_cookbook_1 = require("./alexa-cookbook");
var log = console.log;
// ====================================
// TODO: The items below this comment need your attention.
// ====================================
var SKILL_NAME = 'Space Facts';
var GET_FACT_MESSAGE = 'Here\'s your fact: ';
var HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
var HELP_REPROMPT = 'What can I help you with?';
var FALLBACK_MESSAGE = "The Space Facts skill can't help you with that.\n                          It can help you discover facts about space if you\n                          say tell me a space fact. What can I help you with?";
var FALLBACK_REPROMPT = 'What can I help you with?';
var STOP_MESSAGE = 'Goodbye!';
// ====================================
// TODO: Replace this data with your own.
// You can find translations of this data
// at http://github.com/alexa/skill-sample-node-js-fact/lambda/data
// ====================================
var data = [
    'A year on Mercury is just 88 days long.',
    'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
    'Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.',
    'On Mars, the Sun appears about half the size as it does on Earth.',
    'Earth is the only planet not named after a god.',
    'Jupiter has the shortest day of all the planets.',
    'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
    'The Sun contains 99.86% of the mass in the Solar System.',
    'The Sun is an almost perfect sphere.',
    'A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.',
    'Saturn radiates two and a half times more energy into space than it receives from the sun.',
    'The temperature inside the Sun can reach 15 million degrees Celsius.',
    'The Moon is moving approximately 3.8 cm away from our planet every year.'
];
// ====================================
// Editing anything below this line might break your skill.
// ====================================
var GetNewFactHandler = {
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest'
            || (request.type === 'IntentRequest'
                && request.intent.name === 'GetNewFactIntent');
    },
    handle: function (handlerInput) {
        var randomFact = alexa_cookbook_1.default.getRandomItem(data);
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        return handlerInput.responseBuilder
            .speak(speechOutput)
            .withSimpleCard(SKILL_NAME, randomFact)
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
        return handlerInput.responseBuilder
            .speak(HELP_MESSAGE)
            .reprompt(HELP_REPROMPT)
            .getResponse();
    }
};
var FallbackHandler = {
    // 2018-May-01: AMAZON.FallackIntent is only currently available in en-US locale.
    //              This handler will not be triggered except in that locale, so it can be
    //              safely deployed for any locale.
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.FallbackIntent';
    },
    handle: function (handlerInput) {
        return handlerInput.responseBuilder
            .speak(FALLBACK_MESSAGE)
            .reprompt(FALLBACK_REPROMPT)
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
        return handlerInput.responseBuilder
            .speak(STOP_MESSAGE)
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
            .getResponse();
    }
};
var skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
    .addRequestHandlers(GetNewFactHandler, HelpHandler, ExitHandler, FallbackHandler, SessionEndedRequestHandler)
    .addErrorHandlers(ErrorHandler)
    .lambda();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUFxQztBQUNyQyxtREFBdUM7QUFFL0IsSUFBQSxpQkFBRyxDQUFZO0FBRXZCLHVDQUF1QztBQUN2QywwREFBMEQ7QUFDMUQsdUNBQXVDO0FBRXZDLElBQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQTtBQUNoQyxJQUFNLGdCQUFnQixHQUFHLHFCQUFxQixDQUFBO0FBQzlDLElBQU0sWUFBWSxHQUFHLHFGQUFxRixDQUFBO0FBQzFHLElBQU0sYUFBYSxHQUFHLDJCQUEyQixDQUFBO0FBQ2pELElBQU0sZ0JBQWdCLEdBQUcsNk1BRXFELENBQUE7QUFDOUUsSUFBTSxpQkFBaUIsR0FBRywyQkFBMkIsQ0FBQTtBQUNyRCxJQUFNLFlBQVksR0FBRyxVQUFVLENBQUE7QUFFL0IsdUNBQXVDO0FBQ3ZDLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMsbUVBQW1FO0FBQ25FLHVDQUF1QztBQUV2QyxJQUFNLElBQUksR0FBRztJQUNYLHlDQUF5QztJQUN6Qyx5RkFBeUY7SUFDekYsZ0dBQWdHO0lBQ2hHLG1FQUFtRTtJQUNuRSxpREFBaUQ7SUFDakQsa0RBQWtEO0lBQ2xELHVGQUF1RjtJQUN2RiwwREFBMEQ7SUFDMUQsc0NBQXNDO0lBQ3RDLHlGQUF5RjtJQUN6Riw0RkFBNEY7SUFDNUYsc0VBQXNFO0lBQ3RFLDBFQUEwRTtDQUMzRSxDQUFBO0FBRUQsdUNBQXVDO0FBQ3ZDLDJEQUEyRDtBQUMzRCx1Q0FBdUM7QUFFdkMsSUFBTSxpQkFBaUIsR0FBRztJQUN4QixTQUFTLFlBQUUsWUFBWTtRQUNyQixJQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQTtRQUNwRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssZUFBZTtlQUNsQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssZUFBZTttQkFDL0IsT0FBTyxDQUFD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