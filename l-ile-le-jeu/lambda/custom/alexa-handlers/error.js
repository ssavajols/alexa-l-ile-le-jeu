"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log = console.log;
exports.ErrorHandler = {
    canHandle: function () {
        return true;
    },
    handle: function (handlerInput, error) {
        log("Error handled: " + error.message);
        return handlerInput.responseBuilder
            .speak('Sorry, an error occurred.')
            .reprompt('Sorry, an error occurred.')
            .withShouldEndSession(false)
            .getResponse();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFRLElBQUEsaUJBQUcsQ0FBWTtBQUVWLFFBQUEsWUFBWSxHQUFHO0lBQzFCLFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFDRCxNQUFNLFlBQUUsWUFBWSxFQUFFLEtBQUs7UUFDekIsR0FBRyxDQUFDLG9CQUFrQixLQUFLLENBQUMsT0FBUyxDQUFDLENBQUE7UUFFdEMsT0FBTyxZQUFZLENBQUMsZUFBZTthQUNoQyxLQUFLLENBQUMsMkJBQTJCLENBQUM7YUFDbEMsUUFBUSxDQUFDLDJCQUEyQixDQUFDO2FBQ3JDLG9CQUFvQixDQUFDLEtBQUssQ0FBQzthQUMzQixXQUFXLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0NBQ0YsQ0FBQSJ9