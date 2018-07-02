import * as Alexa from 'ask-sdk-core'
import { Game } from '../game'

export const HelpHandler = {
  canHandle (handlerInput: Alexa.HandlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent'
  },
  handle (handlerInput: Alexa.HandlerInput) {

    const GAME = new Game(handlerInput)

    return handlerInput.responseBuilder
      .speak(GAME.help())
      .reprompt(GAME.help())
      .withShouldEndSession(GAME.isEnd)
      .getResponse()
  }
}
