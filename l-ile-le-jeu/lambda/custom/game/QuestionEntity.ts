import { AnwserEntity } from './AnswerEntity'
import { QuestionMissingIdError, QuestionNotFoundError } from './errors'

export class QuestionEntity {

  public id: string = ''
  public question: string = ''
  public answers: AnwserEntity[] = []
  public isEnd: boolean = false

  constructor (private _data, id) {
    if (!id) {
      throw new QuestionMissingIdError()
    } else if (id.indexOf('.') !== -1) {
      this.setByProgress(id)
    } else if (id) {
      this.setById(id)
    }
  }

  public setById (id: string) {
    if (!id) throw new QuestionMissingIdError()

    this._find(this._data, id, (key, o) => {
      this.set(key, o.question, o.answers)
    })

    if (!this.id) {
      throw new QuestionNotFoundError()
    }
  }

  public setByProgress (progress) {
    const aProgress = progress.split('.')
    const o = aProgress.reduce((p, c) => p[c], this._data)
    this.set(aProgress[aProgress.length], o.question, o.answers)
  }

  public set (id, question, answers) {
    this.id = id
    this.question = question

    answers.forEach((label, index) => {
      this.answers.push(new AnwserEntity(index, label))
    })
  }

  private _find (el, id, cb) {
    Object.keys(el).forEach((key) => {
      if (typeof el[key] === 'object' && key !== id) {
        return this._find(el[key], id, cb)
      } else if (typeof el[key] === 'object' && key === id) {
        return cb(key, el[key])
      }
    })

  }
}
