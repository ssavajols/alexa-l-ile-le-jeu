import { QuestionNotFoundError } from '.'

describe('QuestionNotFound', () => {
  it('should throw exeption', () => {
    expect(() => { throw new QuestionNotFoundError() }).toThrowError('question not found !')
  })
})
