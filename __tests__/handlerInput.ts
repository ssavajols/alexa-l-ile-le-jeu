const getSessionAttributesSpy = jest.fn()
const setSessionAttributesSpy = jest.fn()
let _sessionObject = {}

export const clearSession = () => {
  _sessionObject = {}
}

export const handlerInputFactory = (slots): any => {
  return {
    attributesManager: {
      clear: () => {
        clearSession()
        getSessionAttributesSpy.mockClear()
        setSessionAttributesSpy.mockClear()
      },
      getSessionAttributes: () => {
        getSessionAttributesSpy()
        return _sessionObject
      },
      getSessionAttributesSpy,
      setSessionAttributes: (...args) => {
        setSessionAttributesSpy(...args)
        _sessionObject = {
          ..._sessionObject,
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
    responseBuilder: {}
  }
}
