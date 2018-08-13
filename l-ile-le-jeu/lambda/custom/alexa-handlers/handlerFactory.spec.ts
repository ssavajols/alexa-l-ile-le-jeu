import { HandlerFactory } from './handlerFactory'

describe('HandlerFactory', () => {
  const handlersJSON = require('./handlers.json')

  beforeEach(() => {
    HandlerFactory.create = jest.fn()
  })

  afterEach(() => {
    (HandlerFactory.create as jest.Mock).mockClear()
  })

  it('should call create handlers from JSON', () => {
    expect.assertions(4)
    expect(HandlerFactory.create).not.toHaveBeenCalled()

    HandlerFactory.createFromJson()

    expect(HandlerFactory.create).toHaveBeenCalledTimes(handlersJSON.length)
    for (let index = 0; index < handlersJSON.length; index++) {
      expect((HandlerFactory.create as jest.Mock).mock.calls[index]).toEqual([
        handlersJSON[index].intentName,
        handlersJSON[index].actionType
      ])
    }
  })
})
