export class QuestionMissingIdError extends Error {
  constructor () {
    super()
    this.message = 'provide a question ID'
  }
}
