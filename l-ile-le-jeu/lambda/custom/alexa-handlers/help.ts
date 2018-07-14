import { HandlerFactory } from './handlerFactory'

export const HelpHandler = HandlerFactory.create(['AMAZON.HelpIntent'], '', (error, handlerInput, GAME) => {
  if (error) return false

  return handlerInput.responseBuilder
      .speak(GAME.help())
      .reprompt(GAME.help())
      .withShouldEndSession(GAME.isEnd)
      .getResponse()
})
