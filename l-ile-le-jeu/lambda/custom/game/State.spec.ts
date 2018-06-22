import * as data from './data/state-fr-FR.spec.json'
import { State } from './State'

describe('State', () => {

  let state
  beforeEach(() => {
    state = new State(data)
  })

  it('should state be defined', () => {
    expect(State).toBeDefined()
  })

  it('should return welcome message', () => {
    expect(state.getMessage())
    .toBe(`<p>${data.introduction}</p><p>${data.A.question}</p><p>${data.A.answers.join('\r')}</p>`)
  })

  it('should return question A.B', () => {
    state.setProgress('A.B')
    expect(state.getMessage())
    .toBe(`<p>${data.A.B.question}</p><p>${data.A.B.answers.join('\r')}</p>`)
  })

  it('should set/update progress', async () => {
    expect(state.updateProgress('A')).toBe('A')
    expect(state.updateProgress('B')).toBe('A.B')
    expect(state.setProgress('A')).toBe('A')
    expect(state.setProgress('B')).toBe('B')
    expect(state.setProgress('A.B')).toBe('A.B')
  })

  it('should not set/update progress', async () => {
    state.setProgress('EEE')
    expect(state.updateProgress('')).toBe('EEE')
    expect(state.updateProgress(null)).toBe('EEE')
    expect(state.setProgress('')).toBe('EEE')
    expect(state.setProgress(null)).toBe('EEE')
  })

  it('should go to question if action provided', () => {
    state.setProgress('A')
    expect(state.getMessage('MOVE_HAUT'))
      .toBe(`<p>${data.A.B.question}</p><p>${data.A.B.answers.join('\r')}</p>`)
  })

  it('should return current question if wrong action provided', () => {
    state.setProgress('A')
    expect(state.getMessage('dsq'))
      .toBe(`<p>${data.A.question}</p><p>${data.A.answers.join('\r')}</p>`)
  })

})
