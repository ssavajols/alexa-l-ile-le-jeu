import { Game } from '.'
import { HandlerInputFactory } from '../../../../__tests__/HandlerInputFactory'
import { Controls } from './Controls'
import { Session } from './Session'
import { State } from './State'

jest.mock('./State')

describe('GAME', () => {

  let GAME
  let handlerInput

  beforeEach(() => {
    handlerInput = HandlerInputFactory.create({
      action: { value: 'Droite' }
    }, {
      progress: 'Q1.Q12.Q121'
    })
    GAME = new Game(handlerInput, 'Take')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should contain session instance', () => {
    expect(GAME.session instanceof Session).toBe(true)
  })

  it('should contain controls instance', () => {
    expect(GAME.controls instanceof Controls).toBe(true)
  })

  it('should contain state instance', () => {
    expect(GAME.state instanceof State).toBe(true)
  })

  it('should return help message', () => {
    expect(GAME.help()).toBe('help message must be here !')
  })

  it('should return skill name', () => {
    expect(GAME.skillName()).toBe('le jeu')
  })

  it('should return stop message', () => {
    expect(GAME.stop()).toBe('Au revoir !')
  })

  it('should return fallback message', () => {
    expect(GAME.fallback()).toBe('Commande non reconnu')
  })

  it('should set state with progress from session', () => {
    expect(GAME.state.setProgress).toHaveBeenCalledWith('Q1.Q12.Q121')
  })

  it('should call next from state', () => {
    expect(GAME.state.next).not.toBeCalled()
    GAME.getSpeech()
    expect(GAME.state.next).toBeCalledWith('TAKE_DROITE')
  })

})
