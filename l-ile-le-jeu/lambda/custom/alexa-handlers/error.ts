import { HandlerFactory } from './handlerFactory'

const { log } = console

export const ErrorHandler = HandlerFactory.create(true, '', (error, handlerInput) => {
  log(`Error handled: ${error.message}`)

  return handlerInput.responseBuilder
    .speak('Sorry, an error occurred.')
    .reprompt('Sorry, an error occurred.')
    .withShouldEndSession(false)
    .getResponse()
})
