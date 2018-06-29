import { DataNotLoadedError } from '.'

describe('DataNotLoadedError', () => {
  it('should throw exeption', () => {
    expect(() => { throw new DataNotLoadedError() }).toThrowError('data not loaded')
  })
})
