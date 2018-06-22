import { Game } from '../game'

export const ExitHandler = {
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
