"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alexa = require("ask-sdk-core");
var action_1 = require("./alexa-handlers/action");
var error_1 = require("./alexa-handlers/error");
var exit_1 = require("./alexa-handlers/exit");
var help_1 = require("./alexa-handlers/help");
var move_1 = require("./alexa-handlers/move");
var session_end_1 = require("./alexa-handlers/session-end");
var unhandle_1 = require("./alexa-handlers/unhandle");
var welcome_1 = require("./alexa-handlers/welcome");
var skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
    .addRequestHandlers(welcome_1.WelcomeHandler, move_1.MoveHandler, action_1.TakeActionHandler, action_1.ThrowActionHandler, help_1.HelpHandler, exit_1.ExitHandler, session_end_1.SessionEndedRequestHandler, unhandle_1.UnhandleHandler)
    .addErrorHandlers(error_1.ErrorHandler)
    .lambda();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUFxQztBQUNyQyxrREFBK0U7QUFDL0UsZ0RBQXFEO0FBQ3JELDhDQUFtRDtBQUNuRCw4Q0FBbUQ7QUFDbkQsOENBQW1EO0FBQ25ELDREQUF5RTtBQUN6RSxzREFBMkQ7QUFDM0Qsb0RBQXlEO0FBRXpELElBQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFakQsT0FBTyxDQUFDLE9BQU8sR0FBRyxZQUFZO0tBQzNCLGtCQUFrQixDQUNqQix3QkFBYyxFQUNkLGtCQUFXLEVBQ1gsMEJBQWlCLEVBQ2pCLDJCQUFrQixFQUNsQixrQkFBVyxFQUNYLGtCQUFXLEVBQ1gsd0NBQTBCLEVBQzFCLDBCQUFlLENBQ2hCO0tBQ0EsZ0JBQWdCLENBQUMsb0JBQVksQ0FBQztLQUM5QixNQUFNLEVBQUUsQ0FBQSJ9