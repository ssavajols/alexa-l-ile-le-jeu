import * as Alexa from 'ask-sdk-core'
import { IntentRequest, Response } from 'ask-sdk-model'
import fs from 'fs'
import path from 'path'
import { Game } from '../game'

export class HandlerFactory {
  public static createFromJson () {
    const handlersJSON = JSON.parse(
      fs.readFileSync(path.join(__dirname, './handlers.json')).toString()
    )

    const handlers: any[] = []
    handlersJSON.map((handler) => {
      handlers.push(
        HandlerFactory.create(handler.intentName, handler.actionType)
      )
    })

    return handlers
  }

  public static create (
    intentName: boolean | string[],
    actionType,
    onHandle?
  ): Alexa.RequestHandler {
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
      handle (handlerInput: Alexa.HandlerInput): Promise<Response> | Response {
        const GAME = new Game(handlerInput, actionType)
        const response = onHandle(null, handlerInput, GAME)

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
