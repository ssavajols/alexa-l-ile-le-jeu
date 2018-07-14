"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handlerFactory_1 = require("./handlerFactory");
exports.ExitHandler = handlerFactory_1.HandlerFactory.create(['AMAZON.CancelIntent'], '', function (error, handlerInput, GAME) {
    if (error)
        return false;
    return handlerInput.responseBuilder
        .speak(GAME.stop())
        .getResponse();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4aXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBaUQ7QUFFcEMsUUFBQSxXQUFXLEdBQUcsK0JBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSTtJQUV0RyxJQUFJLEtBQUs7UUFBRSxPQUFPLEtBQUssQ0FBQTtJQUV2QixPQUFPLFlBQVksQ0FBQyxlQUFlO1NBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbEIsV0FBVyxFQUFFLENBQUE7QUFDbEIsQ0FBQyxDQUFDLENBQUEifQ==