import * as Alexa from 'ask-sdk-core'
import { TakeActionHandler, ThrowActionHandler } from './alexa-handlers/action'
import { ErrorHandler } from './alexa-handlers/error'
import { ExitHandler } from './alexa-handlers/exit'
import { HelpHandler } from './alexa-handlers/help'
import { MoveHandler } from './alexa-handlers/move'
import { SessionEndedRequestHandler } from './alexa-handlers/session-end'
import { UnhandleHandler } from './alexa-handlers/unhandle'
import { WelcomeHandler } from './alexa-handlers/welcome'

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
