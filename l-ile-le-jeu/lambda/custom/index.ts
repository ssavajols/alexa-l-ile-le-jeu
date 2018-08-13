import * as Alexa from 'ask-sdk-core'
import { ErrorHandler } from './alexa-handlers/error'
import { ExitHandler } from './alexa-handlers/exit'
import { HandlerFactory } from './alexa-handlers/handlerFactory'
import { HelpHandler } from './alexa-handlers/help'
import { MoveHandler } from './alexa-handlers/move'
import { RepeatHandler } from './alexa-handlers/repeat'
import { SessionEndedRequestHandler } from './alexa-handlers/session-end'
import { UnhandleHandler } from './alexa-handlers/unhandle'
import { WelcomeHandler } from './alexa-handlers/welcome'

const skillBuilder = Alexa.SkillBuilders.custom()

exports.handler = skillBuilder
  .addRequestHandlers(
    WelcomeHandler,
    RepeatHandler,
    ...HandlerFactory.createFromJson(),
    HelpHandler,
    MoveHandler,
    ExitHandler,
    SessionEndedRequestHandler,
    UnhandleHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda()
