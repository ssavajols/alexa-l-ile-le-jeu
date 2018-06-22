import * as Alexa from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'
import { Game } from '../game'

export const UnhandleHandler = {
  canHandle (): Promise<boolean> | boolean {
    return true
  },
  handle (handlerInput: Alexa.HandlerInput): Promise<Response> | Response {

    const GAME = new Game(handlerInput)

    return handlerInput.responseBuilder
      .speak(GAME.fallback())
      .withSimpleCard(GAME.skillName(), GAME.fallback())
      .reprompt(GAME.fallback())
      .withShouldEndSession(false)
      .getResponse()
  }
}
