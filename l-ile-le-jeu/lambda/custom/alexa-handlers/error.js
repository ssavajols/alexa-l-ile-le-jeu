"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handlerFactory_1 = require("./handlerFactory");
var log = console.log;
exports.ErrorHandler = handlerFactory_1.HandlerFactory.create(true, '', function (error, handlerInput) {
    log("Error handled: " + error.message);
    return handlerInput.responseBuilder
        .speak('Sorry, an error occurred.')
        .reprompt('Sorry, an error occurred.')
        .withShouldEndSession(false)
        .getResponse();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFpRDtBQUV6QyxJQUFBLGlCQUFHLENBQVk7QUFFVixRQUFBLFlBQVksR0FBRywrQkFBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQUMsS0FBSyxFQUFFLFlBQVk7SUFDOUUsR0FBRyxDQUFDLG9CQUFrQixLQUFLLENBQUMsT0FBUyxDQUFDLENBQUE7SUFFdEMsT0FBTyxZQUFZLENBQUMsZUFBZTtTQUNoQyxLQUFLLENBQUMsMkJBQTJCLENBQUM7U0FDbEMsUUFBUSxDQUFDLDJCQUEyQixDQUFDO1NBQ3JDLG9CQUFvQixDQUFDLEtBQUssQ0FBQztTQUMzQixXQUFXLEVBQUUsQ0FBQTtBQUNsQixDQUFDLENBQUMsQ0FBQSJ9