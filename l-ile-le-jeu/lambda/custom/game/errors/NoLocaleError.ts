export class NoLocaleError extends Error {
  constructor () {
    super()
    this.message = 'no locale provided'
  }
}
