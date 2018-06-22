// const { log } = console

export class State {

  private _data: any

  private _progress: string = ''

  constructor (data) {
    this._data = data
  }

  public next (actionName?: string) {
    if (!this.getProgress()) {
      this.setProgress('Q1')
      return this.getIntroductionSpeech()
    } else if (actionName) {
      return this.getQuestionSpeech(this.doAction(actionName))
    } else {
      return this.getQuestionSpeech()
    }
  }

  public getProgress () {
    return this._progress
  }

  public setProgress (progress: string): string {
    if (progress) {
      this._progress = progress
    }

    return this.getProgress()
  }

  public updateProgress (progress: string): string {
    if (progress) {
      this._progress += this._progress.length ? `.${progress}` : progress
    }

    return this.getProgress()
  }

  public doAction (actionName) {
    this.setProgress(`${this.getProgress()}${this.getActionIndex(actionName)}`)
    return this.getQuestion(this.getProgress())
  }

  private getActionIndex (actionName) {
    const question = this.getQuestion()
    const progress = this.getProgress()
    const aProgress = progress.split('.')
    const answerIndex = question.answers.indexOf(actionName) + 1
    const currentQuestion = aProgress[aProgress.length - 1]
    return answerIndex > 0 ? `.${currentQuestion + answerIndex.toString()}` : ''
  }

  private getIntroductionSpeech () {
    return `<p>${this._data.introduction}</p>${this.getQuestionSpeech()}`
  }

  private getQuestionSpeech (question = this.getQuestion()) {
    return `<p>${question.question}</p><p>${question.answers.join('\r')}</p>`
  }

  private getQuestion (progress = this.getProgress()) {
    return progress.split('.').reduce((p, c) => p[c], this._data)
  }

}
