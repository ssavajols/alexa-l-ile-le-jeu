import * as Alexa from 'ask-sdk-core'

export class Session {

  private _session: Alexa.AttributesManager

  constructor (handlerInput: Alexa.HandlerInput) {
    this._session = handlerInput.attributesManager
  }

  public getAttribute (name: string): any {
    return this._session.getSessionAttributes()[name]
  }

  public setAttribute (name: string, value: any) {
    const attr = this._session.getSessionAttributes()

    attr[name] = value

    this._session.setSessionAttributes(attr)
  }
}
