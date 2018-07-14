import { QuestionNotDefined } from './errors'
import { QuestionEntity } from './QuestionEntity'

export class State {

  private _data: any

  private _progress: string = ''

  private _question?: QuestionEntity

  constructor (data, progress?) {
    this._data = data
    this.setProgress(progress)
  }

  public next (actionName?: string): string {
    if (!this.getProgress()) {
      this.setProgress('Q1')
      return this.getIntroductionSpeech()
    } else if (actionName) {
      this.doAction(actionName)
      return this.getQuestionSpeech()
    } else {
      return this.getQuestionSpeech()
    }
  }

  public getProgress (): string {
    return this._progress
  }

  public setProgress (progress: string): string {
    if (progress) {
      this._progress = progress
      this.setQuestion()
    }

    return this.getProgress()
  }

  public updateProgress (progress: string): string {
    if (progress) {
      this._progress += this._progress.length ? `.${progress}` : progress
      this.setQuestion()
    }

    return this.getProgress()
  }

  public getQuestion () {
    return this._question
  }

  public doAction (actionName: string): QuestionEntity {
    if (!this._question) {
      throw new QuestionNotDefined()
    }
    this.setProgress(`${this.getProgress()}${this.getActionIndex(actionName)}`)
    return this._question
  }

  private getActionIndex (actionName: string): string {
    if (!this._question) {
      throw new QuestionNotDefined()
    }
    const answerIndex = this._question.findAnswerIndexByValue(actionName) + 1
    const currentQuestion = this.getProgress().split('.').pop()
    return answerIndex > 0 ? `.${currentQuestion + answerIndex.toString()}` : ''
  }

  private getIntroductionSpeech (): string {
    return `<p>${this._data.introduction}</p>${this.getQuestionSpeech()}`
  }

  private getQuestionSpeech (): string {
    return this._question ? this._question.getQuestionSpeech() : ''
  }

  private setQuestion (): QuestionEntity {
    return this._question = new QuestionEntity(this._data, this._progress.split('.').pop())
  }

}
