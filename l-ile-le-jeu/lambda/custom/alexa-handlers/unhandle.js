"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("../Game");
exports.UnhandleHandler = {
    canHandle: function () {
        return true;
    },
    handle: function (handlerInput) {
        var GAME = new Game_1.Game(handlerInput);
        return handlerInput.responseBuilder
            .speak(GAME.fallback())
            .withSimpleCard(GAME.skillName(), GAME.fallback())
            .reprompt(GAME.fallback())
            .withShouldEndSession(false)
            .getResponse();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5oYW5kbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1bmhhbmRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGdDQUE4QjtBQUVqQixRQUFBLGVBQWUsR0FBRztJQUM3QixTQUFTLEVBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFDRCxNQUFNLEVBQU4sVUFBUSxZQUFnQztRQUV0QyxJQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUVuQyxPQUFPLFlBQVksQ0FBQyxlQUFlO2FBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdEIsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakQsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN6QixvQkFBb0IsQ0FBQyxLQUFLLENBQUM7YUFDM0IsV0FBVyxFQUFFLENBQUE7SUFDbEIsQ0FBQztDQUNGLENBQUEifQ==