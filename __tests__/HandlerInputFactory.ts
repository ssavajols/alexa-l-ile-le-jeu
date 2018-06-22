
export class HandlerInputFactory {

  private static _sessionObject = {}

  public static create (slots, session = {}): any {
    const getSessionAttributesSpy = jest.fn()
    const setSessionAttributesSpy = jest.fn()

    this._sessionObject = { ...session }

    const handlerInput = {
      attributesManager: {
        clear: () => {
          HandlerInputFactory._clearSession()
          getSessionAttributesSpy.mockClear()
          setSessionAttributesSpy.mockClear()
        },
        getSessionAttributes: () => {
          getSessionAttributesSpy()
          return HandlerInputFactory._sessionObject
        },
        getSessionAttributesSpy,
        setSessionAttributes: (...args) => {
          setSessionAttributesSpy(...args)
          HandlerInputFactory._sessionObject = {
            ...HandlerInputFactory._sessionObject,
            ...args
          }
        },
        setSessionAttributesSpy
      },
      requestEnvelope: {
        context: {
          System: {
            apiEndpoint: 'endpoint',
            application: {
              applicationId: 'app-id'
            },
            device: {
              deviceId: 'device-id',
              supportedInterfaces: {}
            },
            user: {
              userId: 'user-id'
            }
          }
        },
        request: {
          intent: {
            slots: {
              ...slots
            }
          }
        },
        version: '1'
      },
      responseBuilder: () => ({
        getResponse : () => handlerInput.responseBuilder(),
        reprompt : () => handlerInput.responseBuilder(),
        speak : () => handlerInput.responseBuilder(),
        withShouldEndSession : () => handlerInput.responseBuilder(),
        withSimpleCard : () => handlerInput.responseBuilder()
      })
    }

    return handlerInput
  }

  private static _clearSession () {
    this._sessionObject = {}
  }
}
