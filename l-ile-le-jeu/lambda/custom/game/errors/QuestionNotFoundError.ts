export class QuestionNotFoundError extends Error {
  constructor () {
    super()
    this.message = 'question not found !'
  }
}
