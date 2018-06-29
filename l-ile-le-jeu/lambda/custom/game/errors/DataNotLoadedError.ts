export class DataNotLoadedError extends Error {
  constructor () {
    super()
    this.message = 'data not loaded'
  }
}
