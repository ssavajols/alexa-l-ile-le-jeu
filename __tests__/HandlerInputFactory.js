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
    HandlerInputFactory.create = function (slots, session) {
        if (session === void 0) { session = {}; }
        var getSessionAttributesSpy = jest.fn();
        var setSessionAttributesSpy = jest.fn();
        this._sessionObject = __assign({}, session);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFuZGxlcklucHV0RmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhhbmRsZXJJbnB1dEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0lBQUE7SUF1RUEsQ0FBQztJQW5FZSwwQkFBTSxHQUFwQixVQUFzQixLQUFLLEVBQUUsT0FBWTtRQUFaLHdCQUFBLEVBQUEsWUFBWTtRQUN2QyxJQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQTtRQUN6QyxJQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQTtRQUV6QyxJQUFJLENBQUMsY0FBYyxnQkFBUSxPQUFPLENBQUUsQ0FBQTtRQUVwQyxJQUFNLFlBQVksR0FBRztZQUNuQixpQkFBaUIsRUFBRTtnQkFDakIsS0FBSyxFQUFFO29CQUNMLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFBO29CQUNuQyx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtvQkFDbkMsdUJBQXVCLENBQUMsU0FBUyxFQUFFLENBQUE7Z0JBQ3JDLENBQUM7Z0JBQ0Qsb0JBQW9CLEVBQUU7b0JBQ3BCLHVCQUF1QixFQUFFLENBQUE7b0JBQ3pCLE9BQU8sbUJBQW1CLENBQUMsY0FBYyxDQUFBO2dCQUMzQyxDQUFDO2dCQUNELHVCQUF1Qix5QkFBQTtnQkFDdkIsb0JBQW9CLEVBQUU7b0JBQUMsY0FBTzt5QkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO3dCQUFQLHlCQUFPOztvQkFDNUIsdUJBQXVCLGVBQUksSUFBSSxFQUFDO29CQUNoQyxtQkFBbUIsQ0FBQyxjQUFjLGdCQUM3QixtQkFBbUIsQ0FBQyxjQUFjLEVBQ2xDLElBQUksQ0FDUixDQUFBO2dCQUNILENBQUM7Z0JBQ0QsdUJBQXVCLHlCQUFBO2FBQ3hCO1lBQ0QsZUFBZSxFQUFFO2dCQUNmLE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUU7d0JBQ04sV0FBVyxFQUFFLFVBQVU7d0JBQ3ZCLFdBQVcsRUFBRTs0QkFDWCxhQUFhLEVBQUUsUUFBUTt5QkFDeEI7d0JBQ0QsTUFBTSxFQUFFOzRCQUNOLFFBQVEsRUFBRSxXQUFXOzRCQUNyQixtQkFBbUIsRUFBRSxFQUFFO3lCQUN4Qjt3QkFDRCxJQUFJLEVBQUU7NEJBQ0osTUFBTSxFQUFFLFNBQVM7eUJBQ2xCO3FCQUNGO2lCQUNGO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxNQUFNLEVBQUU7d0JBQ04sS0FBSyxlQUNBLEtBQUssQ0FDVDtxQkFDRjtpQkFDRjtnQkFDRCxPQUFPLEVBQUUsR0FBRzthQUNiO1lBQ0QsZUFBZSxFQUFFLGNBQU0sT0FBQSxDQUFDO2dCQUN0QixXQUFXLEVBQUcsY0FBTSxPQUFBLFlBQVksQ0FBQyxlQUFlLEVBQUUsRUFBOUIsQ0FBOEI7Z0JBQ2xELFFBQVEsRUFBRyxjQUFNLE9BQUEsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUE5QixDQUE4QjtnQkFDL0MsS0FBSyxFQUFHLGNBQU0sT0FBQSxZQUFZLENBQUMsZUFBZSxFQUFFLEVBQTlCLENBQThCO2dCQUM1QyxvQkFBb0IsRUFBRyxjQUFNLE9BQUEsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUE5QixDQUE4QjtnQkFDM0QsY0FBYyxFQUFHLGNBQU0sT0FBQSxZQUFZLENBQUMsZUFBZSxFQUFFLEVBQTlCLENBQThCO2FBQ3RELENBQUMsRUFOcUIsQ0FNckI7U0FDSCxDQUFBO1FBRUQsT0FBTyxZQUFZLENBQUE7SUFDckIsQ0FBQztJQUVjLGlDQUFhLEdBQTVCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUE7SUFDMUIsQ0FBQztJQXBFYyxrQ0FBYyxHQUFHLEVBQUUsQ0FBQTtJQXFFcEMsMEJBQUM7Q0FBQSxBQXZFRCxJQXVFQztBQXZFWSxrREFBbUIifQ==