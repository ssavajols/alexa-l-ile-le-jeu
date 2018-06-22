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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBUSxJQUFBLGlCQUFHLENBQVk7QUFFVixRQUFBLDBCQUEwQixHQUFHO0lBQ3hDLFNBQVMsWUFBRSxZQUFZO1FBQ3JCLElBQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFBO1FBQ3BELE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxxQkFBcUIsQ0FBQTtJQUMvQyxDQUFDO0lBQ0QsTUFBTSxZQUFFLFlBQVk7UUFDbEIsR0FBRyxDQUFDLGdDQUE4QixZQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFRLENBQUMsQ0FBQTtRQUVoRixPQUFPLFlBQVksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDbkQsQ0FBQztDQUNGLENBQUEifQ==