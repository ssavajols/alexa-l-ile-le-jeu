import { Game } from '.'
import { handlerInputFactory } from '../../../../__tests__/handlerInput'
import { Controls } from './Controls'
import { Session } from './Session'

describe('GAME', () => {

  let GAME

  beforeEach(() => {
    const handlerInput = handlerInputFactory({})
    GAME = new Game(handlerInput)
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
})
