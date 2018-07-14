import { HandlerFactory } from './handlerFactory'

export const TakeActionHandler = HandlerFactory.create(['TakeAction'], 'Take')
export const ThrowActionHandler = HandlerFactory.create(['ThroweAction'], 'Throw')
