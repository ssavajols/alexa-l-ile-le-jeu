import * as Alexa from 'ask-sdk-core'

export class Controls {

  private _slots: any

  constructor (handlerInput: Alexa.HandlerInput) {
    try {
      this._slots = (handlerInput.requestEnvelope.request as any).intent.slots
    } catch (err) {
      this._slots = {}
    }
  }

  public getAction (): string {
    return this._slotValue('action')
  }

  public getDirection (): string {
    return this._slotValue('direction')
  }

  private _slotValue (slotName: string): any {
    return this._slots && this._slots[slotName] ? this._slots[slotName].value : null
  }
}
