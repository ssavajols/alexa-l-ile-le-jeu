import * as Alexa from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'
import { Game } from '../game'

export const WelcomeHandler = {
  canHandle (handlerInput: Alexa.HandlerInput): Promise<boolean> | boolean {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'LaunchRequest'
  },
  handle (handlerInput: Alexa.HandlerInput): Promise<Response> | Response {
    const GAME = new Game(handlerInput)

    const speak = GAME.getSpeech()

    return handlerInput.responseBuilder
      .speak(speak)
      .withSimpleCard(GAME.skillName(), speak)
      .withShouldEndSession(GAME.isEnd)
      .reprompt('Qué ?')
      .getResponse()
  }
}
