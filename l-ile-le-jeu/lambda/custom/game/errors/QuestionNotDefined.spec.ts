import { QuestionNotDefined } from '.'

describe('QuestionNotDefined', () => {
  it('should throw exeption', () => {
    expect(() => { throw new QuestionNotDefined() }).toThrowError('Question is not defined')
  })
})
