import { HandlerInputFactory } from '../../../../__tests__/HandlerInputFactory'
import { Controls } from './Controls'

describe('controls', () => {

  let CONTROLS

  beforeEach(() => {
    const handlerInput = HandlerInputFactory.create({
      action: {
        value: 'take'
      },
      direction: {
        value: 'right'
      }
    })

    CONTROLS = new Controls(handlerInput)
  })

  it('should get action from slot', () => {
    expect(CONTROLS.getAction()).toBe('take')
  })

  it('should get direction from slot', () => {
    expect(CONTROLS.getDirection()).toBe('right')
  })

  it('should return null if no action', () => {
    const handlerInput = HandlerInputFactory.create({})
    const controls = new Controls(handlerInput)
    expect(controls.getAction()).toBe(null)
  })

  it('should return null if no direction', () => {
    const handlerInput = HandlerInputFactory.create({})
    const controls = new Controls(handlerInput)
    expect(controls.getDirection()).toBe(null)
  })
})
