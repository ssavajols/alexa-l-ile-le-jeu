import { QuestionMissingIdError } from '.'

describe('QuestionMissingIdError', () => {
  it('should throw exeption', () => {
    expect(() => { throw new QuestionMissingIdError() }).toThrowError('provide a question ID')
  })
})
