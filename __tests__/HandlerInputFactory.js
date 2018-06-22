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
var HandlerInputFactory = /** @class */ (function () {
    function HandlerInputFactory() {
    }
    HandlerInputFactory.create = function (slots) {
        var getSessionAttributesSpy = jest.fn();
        var setSessionAttributesSpy = jest.fn();
        var handlerInput = {
            attributesManager: {
                clear: function () {
                    HandlerInputFactory._clearSession();
                    getSessionAttributesSpy.mockClear();
                    setSessionAttributesSpy.mockClear();
                },
                getSessionAttributes: function () {
                    getSessionAttributesSpy();
                    return HandlerInputFactory._sessionObject;
                },
                getSessionAttributesSpy: getSessionAttributesSpy,
                setSessionAttributes: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    setSessionAttributesSpy.apply(void 0, args);
                    HandlerInputFactory._sessionObject = __assign({}, HandlerInputFactory._sessionObject, args);
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
            responseBuilder: function () { return ({
                getResponse: function () { return handlerInput.responseBuilder(); },
                reprompt: function () { return handlerInput.responseBuilder(); },
                speak: function () { return handlerInput.responseBuilder(); },
                withShouldEndSession: function () { return handlerInput.responseBuilder(); },
                withSimpleCard: function () { return handlerInput.responseBuilder(); }
            }); }
        };
        return handlerInput;
    };
    HandlerInputFactory._clearSession = function () {
        this._sessionObject = {};
    };
    HandlerInputFactory._sessionObject = {};
    return HandlerInputFactory;
}());
exports.HandlerInputFactory = HandlerInputFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFuZGxlcklucHV0RmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhhbmRsZXJJbnB1dEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0lBQUE7SUFxRUEsQ0FBQztJQWpFZSwwQkFBTSxHQUFwQixVQUFzQixLQUFLO1FBQ3pCLElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1FBQ3pDLElBQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFBO1FBRXpDLElBQU0sWUFBWSxHQUFHO1lBQ25CLGlCQUFpQixFQUFFO2dCQUNqQixLQUFLLEVBQUU7b0JBQ0wsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUE7b0JBQ25DLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxDQUFBO29CQUNuQyx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtnQkFDckMsQ0FBQztnQkFDRCxvQkFBb0IsRUFBRTtvQkFDcEIsdUJBQXVCLEVBQUUsQ0FBQTtvQkFDekIsT0FBTyxtQkFBbUIsQ0FBQyxjQUFjLENBQUE7Z0JBQzNDLENBQUM7Z0JBQ0QsdUJBQXVCLHlCQUFBO2dCQUN2QixvQkFBb0IsRUFBRTtvQkFBQyxjQUFPO3lCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87d0JBQVAseUJBQU87O29CQUM1Qix1QkFBdUIsZUFBSSxJQUFJLEVBQUM7b0JBQ2hDLG1CQUFtQixDQUFDLGNBQWMsZ0JBQzdCLG1CQUFtQixDQUFDLGNBQWMsRUFDbEMsSUFBSSxDQUNSLENBQUE7Z0JBQ0gsQ0FBQztnQkFDRCx1QkFBdUIseUJBQUE7YUFDeEI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2YsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRTt3QkFDTixXQUFXLEVBQUUsVUFBVTt3QkFDdkIsV0FBVyxFQUFFOzRCQUNYLGFBQWEsRUFBRSxRQUFRO3lCQUN4Qjt3QkFDRCxNQUFNLEVBQUU7NEJBQ04sUUFBUSxFQUFFLFdBQVc7NEJBQ3JCLG1CQUFtQixFQUFFLEVBQUU7eUJBQ3hCO3dCQUNELElBQUksRUFBRTs0QkFDSixNQUFNLEVBQUUsU0FBUzt5QkFDbEI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLE1BQU0sRUFBRTt3QkFDTixLQUFLLGVBQ0EsS0FBSyxDQUNUO3FCQUNGO2lCQUNGO2dCQUNELE9BQU8sRUFBRSxHQUFHO2FBQ2I7WUFDRCxlQUFlLEVBQUUsY0FBTSxPQUFBLENBQUM7Z0JBQ3RCLFdBQVcsRUFBRyxjQUFNLE9BQUEsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUE5QixDQUE4QjtnQkFDbEQsUUFBUSxFQUFHLGNBQU0sT0FBQSxZQUFZLENBQUMsZUFBZSxFQUFFLEVBQTlCLENBQThCO2dCQUMvQyxLQUFLLEVBQUcsY0FBTSxPQUFBLFlBQVksQ0FBQyxlQUFlLEVBQUUsRUFBOUIsQ0FBOEI7Z0JBQzVDLG9CQUFvQixFQUFHLGNBQU0sT0FBQSxZQUFZLENBQUMsZUFBZSxFQUFFLEVBQTlCLENBQThCO2dCQUMzRCxjQUFjLEVBQUcsY0FBTSxPQUFBLFlBQVksQ0FBQyxlQUFlLEVBQUUsRUFBOUIsQ0FBOEI7YUFDdEQsQ0FBQyxFQU5xQixDQU1yQjtTQUNILENBQUE7UUFFRCxPQUFPLFlBQVksQ0FBQTtJQUNyQixDQUFDO0lBRWMsaUNBQWEsR0FBNUI7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBbEVjLGtDQUFjLEdBQUcsRUFBRSxDQUFBO0lBbUVwQywwQkFBQztDQUFBLEFBckVELElBcUVDO0FBckVZLGtEQUFtQiJ9