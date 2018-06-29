import { NoLocaleError } from '.'

describe('NoLocaleError', () => {
  it('should throw exeption', () => {
    expect(() => { throw new NoLocaleError() }).toThrowError('no locale provided')
  })
})
