// const { log } = console

export class State {

  private _data: any

  private _progress: string = ''

  private _index: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  constructor (data) {
    this._data = data
  }

  public getMessage (actionName?: string) {
    if (!this.getProgress()) {
      this.setProgress('A')
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
    const progress = `${this.getProgress()}${this.getActionIndex(actionName)}`
    return this.getQuestion(progress)
  }

  private getActionIndex (actionName) {
    const question = this.getQuestion()
    const index = this._index[question.answers.indexOf(actionName)]
    return index ? `.${index}` : ''
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
