import { DataNotLoadedError, NoLocaleError } from './errors'

export class Config {

  private static _env: string | undefined
  private static _data: any
  private static _locale: string

  public static getConfig (): any {
    if (!this._data) throw new DataNotLoadedError()
    return Config._data
  }

  public static load (locale: string) {
    if (!locale) throw new NoLocaleError()

    Config._locale = locale
    Config._env = process.env.NODE_ENV

    const filename = Config._getDataFilename()
    return Config._data = require(`./data/${filename}`)
  }

  private static _getDataFilename (): string {
    switch (Config._env) {
      case 'test':
        return `state-${Config._locale}.spec.json`

      default:
        return `state-${Config._locale}.json`
    }
  }
}
