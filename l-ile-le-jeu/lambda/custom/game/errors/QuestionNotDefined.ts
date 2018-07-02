export class QuestionNotDefined extends Error {
  constructor () {
    super()
    this.message = 'Question is not defined'
  }
}
