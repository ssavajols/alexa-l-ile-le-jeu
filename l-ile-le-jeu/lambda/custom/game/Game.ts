import * as Alexa from 'ask-sdk-core'
import { Controls } from './Controls'
import { Session } from './Session'

export class Game {

  public session: Session

  public controls: Controls

  constructor (handler: Alexa.HandlerInput) {
    this.session = new Session(handler)
    this.controls = new Controls(handler)

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

}
