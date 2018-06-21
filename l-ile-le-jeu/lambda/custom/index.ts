import * as Alexa from 'ask-sdk-core'
import { Response } from 'ask-sdk-model'
import { Game } from './game'

const { log } = console

const WelcomeHandler = {
  canHandle (handlerInput: Alexa.HandlerInput): Promise<boolean> | boolean {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'LaunchRequest'
  },
  handle (handlerInput: Alexa.HandlerInput): Promise<Response> | Response {
    const GAME = new Game(handlerInput)
    const int = GAME.session.getNewInt()

    const speak = 'welcome ' + int

    return handlerInput.responseBuilder
      .speak(speak)
      .withSimpleCard(GAME.skillName(), speak)
      .withShouldEndSession(false)
      .reprompt('Qué ?')
      .getResponse()
  }
}

const MoveHandler = {
  canHandle (handlerInput: Alexa.HandlerInput): Promise<boolean> | boolean {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === 'Move'
  },
  handle (handlerInput: Alexa.HandlerInput): Promise<Response> | Response {
    const GAME = new Game(handlerInput)
    const int = GAME.session.getNewInt()
    const action = GAME.controls.getDirection() || 'no direction'

    const speak = 'direction ' + int + ' ' + action

    return handlerInput.responseBuilder
      .speak(speak)
      .withSimpleCard(GAME.skillName(), speak)
      .withShouldEndSession(false)
      .reprompt('Qué ?')
      .getResponse()
  }
}

const ActionHandler = (actionName: string) => ({
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

const TakeActionHandler = ActionHandler('Take')

const ThrowActionHandler = ActionHandler('Throw')

const UnhandleHandler = {
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

const HelpHandler = {
  canHandle (handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent'
  },
  handle (handlerInput) {

    const GAME = new Game(handlerInput)

    return handlerInput.responseBuilder
      .speak(GAME.help())
      .reprompt(GAME.help())
      .withShouldEndSession(false)
      .getResponse()
  }
}

const ExitHandler = {
  canHandle (handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent')
  },
  handle (handlerInput) {
    const GAME = new Game(handlerInput)

    return handlerInput.responseBuilder
      .speak(GAME.stop())
      .getResponse()
  }
}

const SessionEndedRequestHandler = {
  canHandle (handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'SessionEndedRequest'
  },
  handle (handlerInput) {
    log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`)

    return handlerInput.responseBuilder.getResponse()
  }
}

const ErrorHandler = {
  canHandle () {
    return true
  },
  handle (handlerInput, error) {
    log(`Error handled: ${error.message}`)

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .withShouldEndSession(false)
      .getResponse()
  }
}

const skillBuilder = Alexa.SkillBuilders.custom()

exports.handler = skillBuilder
  .addRequestHandlers(
    WelcomeHandler,
    MoveHandler,
    TakeActionHandler,
    ThrowActionHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler,
    UnhandleHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda()
