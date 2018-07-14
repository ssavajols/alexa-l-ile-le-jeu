import * as Alexa from 'ask-sdk-core'
import { IntentRequest, Response } from 'ask-sdk-model'
import { Game } from '../game'

export class HandlerFactory {
  public static create (
    intentName: boolean | string[],
    actionType,
    onHandle?
  ): any {
    return {
      canHandle (handlerInput: Alexa.HandlerInput): Promise<boolean> | boolean {
        const request = handlerInput.requestEnvelope.request as IntentRequest
        if (typeof intentName === 'boolean') return intentName

        return (
          (request.type === 'IntentRequest' ||
            request.type === 'LaunchRequest') &&
          intentName.indexOf(request.intent.name) !== -1
        )
      },
      handle (
        handlerInput: Alexa.HandlerInput,
        error
      ): Promise<Response> | Response {
        const GAME = new Game(handlerInput, actionType)
        const response = onHandle(error, handlerInput, GAME)

        return response
          ? response
          : handlerInput.responseBuilder
              .speak(GAME.getSpeech())
              .withSimpleCard(GAME.skillName(), GAME.getSpeech())
              .withShouldEndSession(GAME.isEnd)
              .reprompt(GAME.getSpeech())
              .getResponse()
      }
    }
  }
}
