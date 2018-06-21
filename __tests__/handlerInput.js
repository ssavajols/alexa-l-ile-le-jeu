"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var getSessionAttributesSpy = jest.fn();
var setSessionAttributesSpy = jest.fn();
var _sessionObject = {};
exports.clearSession = function () {
    _sessionObject = {};
};
exports.handlerInputFactory = function (slots) {
    return {
        attributesManager: {
            clear: function () {
                exports.clearSession();
                getSessionAttributesSpy.mockClear();
                setSessionAttributesSpy.mockClear();
            },
            getSessionAttributes: function () {
                getSessionAttributesSpy();
                return _sessionObject;
            },
            getSessionAttributesSpy: getSessionAttributesSpy,
            setSessionAttributes: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                setSessionAttributesSpy.apply(void 0, args);
                _sessionObject = __assign({}, _sessionObject, args);
            },
            setSessionAttributesSpy: setSessionAttributesSpy
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
                    slots: __assign({}, slots)
                }
            },
            version: '1'
        },
        responseBuilder: {}
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlcklucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFuZGxlcklucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQTtBQUN6QyxJQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQTtBQUN6QyxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUE7QUFFVixRQUFBLFlBQVksR0FBRztJQUMxQixjQUFjLEdBQUcsRUFBRSxDQUFBO0FBQ3JCLENBQUMsQ0FBQTtBQUVZLFFBQUEsbUJBQW1CLEdBQUcsVUFBQyxLQUFLO0lBQ3ZDLE9BQU87UUFDTCxpQkFBaUIsRUFBRTtZQUNqQixLQUFLLEVBQUU7Z0JBQ0wsb0JBQVksRUFBRSxDQUFBO2dCQUNkLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxDQUFBO2dCQUNuQyx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUNyQyxDQUFDO1lBQ0Qsb0JBQW9CLEVBQUU7Z0JBQ3BCLHVCQUF1QixFQUFFLENBQUE7Z0JBQ3pCLE9BQU8sY0FBYyxDQUFBO1lBQ3ZCLENBQUM7WUFDRCx1QkFBdUIseUJBQUE7WUFDdkIsb0JBQW9CLEVBQUU7Z0JBQUMsY0FBTztxQkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO29CQUFQLHlCQUFPOztnQkFDNUIsdUJBQXVCLGVBQUksSUFBSSxFQUFDO2dCQUNoQyxjQUFjLGdCQUNULGNBQWMsRUFDZCxJQUFJLENBQ1IsQ0FBQTtZQUNILENBQUM7WUFDRCx1QkFBdUIseUJBQUE7U0FDeEI7UUFDRCxlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFO29CQUNOLFdBQVcsRUFBRSxVQUFVO29CQUN2QixXQUFXLEVBQUU7d0JBQ1gsYUFBYSxFQUFFLFFBQVE7cUJBQ3hCO29CQUNELE1BQU0sRUFBRTt3QkFDTixRQUFRLEVBQUUsV0FBVzt3QkFDckIsbUJBQW1CLEVBQUUsRUFBRTtxQkFDeEI7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLE1BQU0sRUFBRSxTQUFTO3FCQUNsQjtpQkFDRjthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLE1BQU0sRUFBRTtvQkFDTixLQUFLLGVBQ0EsS0FBSyxDQUNUO2lCQUNGO2FBQ0Y7WUFDRCxPQUFPLEVBQUUsR0FBRztTQUNiO1FBQ0QsZUFBZSxFQUFFLEVBQUU7S0FDcEIsQ0FBQTtBQUNILENBQUMsQ0FBQSJ9