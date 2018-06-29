import { AnwserEntity } from './AnswerEntity'
import data from './data/state-fr-FR.spec.json'
import { QuestionMissingIdError, QuestionNotFoundError } from './errors'
import { QuestionEntity } from './QuestionEntity'

describe('QuestionEntity', () => {

  it('should get question data by id', () => {
    const question = new QuestionEntity(data, 'Q111')
    expect(question.question).toBe(data.Q1.Q11.Q111.question)
  })

  it('should throw exception if question not found', () => {
    expect(() => new QuestionEntity(data, 'QQQ')).toThrowError(new QuestionNotFoundError().message)
  })

  it('should have AnswerEntity instance', () => {
    expect((new QuestionEntity(data, 'Q1')).answers[0] instanceof AnwserEntity).toBeTruthy()
  })

  it('should get question by progress', () => {
    const question = new QuestionEntity(data, 'Q1.Q11.Q112')
    expect(question.question).toBe(data.Q1.Q11.Q112.question)
  })

  it('should throw exception', () => {
    let Q
    expect(() => Q = new QuestionEntity({}, '')).toThrowError(new QuestionMissingIdError().message)
    Q = new QuestionEntity(data, 'Q1')
    expect(() => Q.setById('')).toThrowError(new QuestionMissingIdError().message)
  })
})
