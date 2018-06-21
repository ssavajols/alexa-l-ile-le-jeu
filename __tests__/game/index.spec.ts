import { Game } from '../../l-ile-le-jeu/lambda/custom/game'
import { Controls } from '../../l-ile-le-jeu/lambda/custom/game/Controls'
import { Session } from '../../l-ile-le-jeu/lambda/custom/game/Session'
import { handlerInputFactory } from '../handlerInput'

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
