import { HandlerInputFactory } from '../../../../__tests__/HandlerInputFactory'
import { Controls } from './Controls'

describe('controls', () => {

  let CONTROLS

  beforeEach(() => {
    const handlerInput = HandlerInputFactory.create({
      action: {
        value: 'marteau'
      }
    })

    CONTROLS = new Controls(handlerInput, 'TAKE')
  })

  it('should get action from slot', () => {
    expect(CONTROLS.getAction()).toBe('TAKE_MARTEAU')
  })

  it('should return null if no action', () => {
    const handlerInput = HandlerInputFactory.create({})
    const controls = new Controls(handlerInput)
    expect(controls.getAction()).toBe(null)
  })
})
