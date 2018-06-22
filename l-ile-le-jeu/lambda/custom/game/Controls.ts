import * as Alexa from 'ask-sdk-core'

export class Controls {

  private _slots: any

  private _actionType: string

  constructor (handlerInput: Alexa.HandlerInput, _actionType?: string) {

    this._actionType = _actionType || ''

    try {
      this._slots = (handlerInput.requestEnvelope.request as any).intent.slots
    } catch (err) {
      this._slots = {}
    }
  }

  public getAction (): string | null {
    const actionType = this._actionType
    const actionName = this._slotValue('action')

    if (actionName && actionType) {
      return `${actionType.toUpperCase()}_${actionName.toUpperCase()}`
    } else if (actionName) {
      return `${actionName.toUpperCase()}`
    }

    return null
  }

  private _slotValue (slotName: string): any {
    return this._slots && this._slots[slotName] ? this._slots[slotName].value : null
  }
}
