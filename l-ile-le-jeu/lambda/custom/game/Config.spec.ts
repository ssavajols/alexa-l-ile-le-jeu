import { Config } from './Config'
import { DataNotLoadedError, NoLocaleError } from './errors'

describe('config', () => {
  const data = require('./data/state-fr-FR.spec.json')

  it('should throw exception if no locale', () => {
    expect(() => Config.getConfig()).toThrowError(
      new DataNotLoadedError().message
    )
  })

  it('should return data', () => {
    Config.load('fr-FR')
    expect(Config.getConfig()).toEqual(data)
  })

  it('should throw exception', () => {
    const env = process.env.NODE_ENV
    process.env.NODE_ENV = null

    expect(() => Config.load('no-locale')).toThrowError()
    expect(() => Config.load('')).toThrowError(new NoLocaleError().message)

    process.env.NODE_ENV = env
  })
})
