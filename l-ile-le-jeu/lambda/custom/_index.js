"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ask_sdk_core_1 = __importDefault(require("ask-sdk-core"));
var alexa_cookbook_1 = __importDefault(require("./alexa-cookbook"));
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
var skillBuilder = ask_sdk_core_1.default.SkillBuilders.custom();
exports.handler = skillBuilder
    .addRequestHandlers(GetNewFactHandler, HelpHandler, ExitHandler, FallbackHandler, SessionEndedRequestHandler)
    .addErrorHandlers(ErrorHandler)
    .lambda();
