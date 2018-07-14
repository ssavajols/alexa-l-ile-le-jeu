import { HandlerFactory } from './handlerFactory'

export const ExitHandler = HandlerFactory.create(['AMAZON.CancelIntent'], '', (error, handlerInput, GAME) => {

  if (error) return false

  return handlerInput.responseBuilder
    .speak(GAME.stop())
    .getResponse()
})
