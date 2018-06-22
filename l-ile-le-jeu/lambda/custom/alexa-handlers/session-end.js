"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log = console.log;
exports.SessionEndedRequestHandler = {
    canHandle: function (handlerInput) {
        var request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle: function (handlerInput) {
        log("Session ended with reason: " + handlerInput.requestEnvelope.request.reason);
        return handlerInput.responseBuilder.getResponse();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1lbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXNzaW9uLWVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFRLElBQUEsaUJBQUcsQ0FBWTtBQUVWLFFBQUEsMEJBQTBCLEdBQUc7SUFDeEMsU0FBUyxZQUFFLFlBQVk7UUFDckIsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUE7UUFDcEQsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLHFCQUFxQixDQUFBO0lBQy9DLENBQUM7SUFDRCxNQUFNLFlBQUUsWUFBWTtRQUNsQixHQUFHLENBQUMsZ0NBQThCLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQVEsQ0FBQyxDQUFBO1FBRWhGLE9BQU8sWUFBWSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNuRCxDQUFDO0NBQ0YsQ0FBQSJ9