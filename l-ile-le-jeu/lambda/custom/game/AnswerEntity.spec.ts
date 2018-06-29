import { AnwserEntity } from './AnswerEntity'
import data from './data/state-fr-FR.spec.json'

describe('Answer', () => {
  it('should not crash', () => {
    expect(() => new AnwserEntity(1, 'A')).not.toThrowError()
  })

  it('should get answer 1', () => {
    const index = 0
    expect((new AnwserEntity(index, data.Q1.answers[index])).getLabel()).toBe('TAKE_MARTEAU')
    expect((new AnwserEntity(index, data.Q1.answers[index])).getIndex()).toBe(index)
  })

  it('should get answer 2', () => {
    const index = 1
    expect((new AnwserEntity(index, data.Q1.answers[index])).getLabel()).toBe('MOVE_HAUT')
    expect((new AnwserEntity(index, data.Q1.answers[index])).getIndex()).toBe(index)
  })

})
