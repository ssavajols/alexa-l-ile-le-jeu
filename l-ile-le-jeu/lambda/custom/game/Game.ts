import * as Alexa from 'ask-sdk-core'
import { Controls } from './Controls'
import * as data from './data/state-fr-FR.spec.json'
import { Session } from './Session'
import { State } from './State'

export class Game {

  public session: Session
  public controls: Controls
  public state: State

  private _speech: string = ''

  constructor (handler: Alexa.HandlerInput, actionType?: string, language: string = 'fr-FR') {
    this.session = new Session(handler)
    this.controls = new Controls(handler, actionType)
    this.state = new State(data, this.session.getAttribute('progress'))
  }

  public getSpeech (): string {
    this._speech = this._speech ? this._speech : this.state.next(this.controls.getAction() || '')
    this.session.setAttribute('progress', this.state.getProgress())
    return this._speech
  }

  public help (): string {
    return 'help message must be here !'
  }

  public skillName (): string {
    return 'le jeu'
  }

  public stop (): string {
    return 'Au revoir !'
  }

  public fallback (): string {
    return 'Commande non reconnu'
  }

  public get isEnd () {
    const question = this.state.getQuestion()
    return question ? question.isEnd : false
  }

}
