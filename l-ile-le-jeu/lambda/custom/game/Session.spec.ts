import { HandlerInputFactory } from '../../../../__tests__/HandlerInputFactory'
import { Session } from './Session'

describe('session', () => {

  let SESSION: Session
  let handlerInput: any

  beforeEach(() => {
    handlerInput = HandlerInputFactory.create({})
    SESSION = new Session(handlerInput)
  })

  afterEach(() => {
    handlerInput.attributesManager.clear()
  })

  it('should call attribuesManager.getSessionAttribute', () => {
    const spy = handlerInput.attributesManager.getSessionAttributesSpy as jest.Mock
    expect(spy.mock.calls.length).toBe(0)
    SESSION.getAttribute('not-set')
    expect(spy.mock.calls.length).toBe(1)
  })

  it('should return null if attribute not set', () => {
    expect(SESSION.getAttribute('not-set')).toBeUndefined()
  })

  it('should return value if attribute set', () => {
    SESSION.setAttribute('set', 'value')
    expect(SESSION.getAttribute('set')).toBe('value')
  })

  it('should return new int value', () => {
    expect(SESSION.getNewInt()).toBe(1)
    expect(SESSION.getNewInt()).toBe(2)
    expect(SESSION.getNewInt()).toBe(3)
    expect(SESSION.getNewInt()).toBe(4)
  })
})
