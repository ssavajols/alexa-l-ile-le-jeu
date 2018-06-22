import * as Alexa from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'
import { Game } from '../game'

export const ActionHandler = (actionName: string) => ({
  canHandle (handlerInput: Alexa.HandlerInput): Promise<boolean> | boolean {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === `${actionName}Action`
  },
  handle (handlerInput: Alexa.HandlerInput): Promise<Response> | Response {

    const GAME = new Game(handlerInput)
    const int = GAME.session.getNewInt()
    const action = GAME.controls.getAction() || 'no action'

    const speak = 'action ' + actionName + ' ' + int + ' ' + action

    return handlerInput.responseBuilder
      .speak(speak)
      .withSimpleCard(GAME.skillName(), speak)
      .withShouldEndSession(false)
      .reprompt('Qué ?')
      .getResponse()
  }
})

export const TakeActionHandler = ActionHandler('Take')

export const ThrowActionHandler = ActionHandler('Throw')
