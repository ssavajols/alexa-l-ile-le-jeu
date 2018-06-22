const { log } = console

export const ErrorHandler = {
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
