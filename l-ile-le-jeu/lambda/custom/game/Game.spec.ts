import { Game } from '.'
import { HandlerInputFactory } from '../../../../__tests__/HandlerInputFactory'
import { Controls } from './Controls'
import { Session } from './Session'
import { State } from './State'

describe('GAME', () => {
  let GAME
  let handlerInput
  const data = require('./data/state-fr-FR.spec.json')

  beforeEach(() => {
    handlerInput = HandlerInputFactory.create(
      {
        action: { value: 'Droite' }
      },
      {
        progress: 'Q1.Q12'
      }
    )
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

  it('should get Q12', () => {
    expect(GAME.getSpeech()).toMatchSnapshot()
  })

  it('should get first question (new session)', () => {
    const h = HandlerInputFactory.create({}, {})
    const game = new Game(h)
    expect(game.isEnd).toBeFalsy()
    expect(game.getSpeech()).toMatchSnapshot()
    expect(h.attributesManager.getSessionAttributes().progress).toBe('Q1')
  })

  it('should get isEnd attribute => false', () => {
    expect(GAME.isEnd).toBeFalsy()
  })

  it('should get isEnd attribute => true', () => {
    const h = HandlerInputFactory.create(
      {},
      {
        progress: 'Q2'
      }
    )
    const game = new Game(h)
    expect(game.isEnd).toBeTruthy()
    expect(game.getSpeech()).toMatchSnapshot()
  })
})
