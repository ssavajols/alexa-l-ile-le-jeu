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
    expect(state.next())
    .toBe(`<p>${data.introduction}</p><p>${data.Q1.question}</p><p>${data.Q1.answers.join('. ')}</p>`)
  })

  it('should return question Q1.Q12', () => {
    state.setProgress('Q1.Q12')
    expect(state.next())
    .toBe(`<p>${data.Q1.Q12.question}</p><p>${data.Q1.Q12.answers.join('. ')}</p>`)
  })

  it('should set/update progress', async () => {
    expect(state.updateProgress('Q1')).toBe('Q1')
    expect(state.updateProgress('Q11')).toBe('Q1.Q11')
    expect(state.setProgress('Q1')).toBe('Q1')
    expect(state.setProgress('Q1.Q12')).toBe('Q1.Q12')
  })

  it('should not set/update progress', async () => {
    state.setProgress('Q1')
    expect(state.updateProgress('')).toBe('Q1')
    expect(state.updateProgress(null)).toBe('Q1')
    expect(state.setProgress('')).toBe('Q1')
    expect(state.setProgress(null)).toBe('Q1')
  })

  it('should go to question if action provided', () => {
    state.setProgress('Q1')
    expect(state.next('MOVE_HAUT'))
      .toBe(`<p>${data.Q1.Q12.question}</p><p>${data.Q1.Q12.answers.join('. ')}</p>`)
  })

  it('should return current question if wrong action provided', () => {
    state.setProgress('Q1')
    expect(state.next('dsq'))
      .toBe(`<p>${data.Q1.question}</p><p>${data.Q1.answers.join('. ')}</p>`)
  })

})
