"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("../../l-ile-le-jeu/lambda/custom/game");
var Controls_1 = require("../../l-ile-le-jeu/lambda/custom/game/Controls");
var Session_1 = require("../../l-ile-le-jeu/lambda/custom/game/Session");
var handlerInput_1 = require("../handlerInput");
describe('GAME', function () {
    var GAME;
    beforeEach(function () {
        var handlerInput = handlerInput_1.handlerInputFactory({});
        GAME = new game_1.Game(handlerInput);
    });
    afterEach(function () {
        jest.clearAllMocks();
    });
    it('should contain session instance', function () {
        expect(GAME.session instanceof Session_1.Session).toBe(true);
    });
    it('should contain controls instance', function () {
        expect(GAME.controls instanceof Controls_1.Controls).toBe(true);
    });
    it('should return help message', function () {
        expect(GAME.help()).toBe('help message must be here !');
    });
    it('should return skill name', function () {
        expect(GAME.skillName()).toBe('le jeu');
    });
    it('should return stop message', function () {
        expect(GAME.stop()).toBe('Au revoir !');
    });
    it('should return fallback message', function () {
        expect(GAME.fallback()).toBe('Commande non reconnu');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBNEQ7QUFDNUQsMkVBQXlFO0FBQ3pFLHlFQUF1RTtBQUN2RSxnREFBcUQ7QUFFckQsUUFBUSxDQUFDLE1BQU0sRUFBRTtJQUVmLElBQUksSUFBSSxDQUFBO0lBRVIsVUFBVSxDQUFDO1FBQ1QsSUFBTSxZQUFZLEdBQUcsa0NBQW1CLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDNUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQy9CLENBQUMsQ0FBQyxDQUFBO0lBRUYsU0FBUyxDQUFDO1FBQ1IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGlDQUFpQyxFQUFFO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxZQUFZLGlCQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDcEQsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsa0NBQWtDLEVBQUU7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLFlBQVksbUJBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN0RCxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUE7SUFDekQsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMEJBQTBCLEVBQUU7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN6QyxDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3pDLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGdDQUFnQyxFQUFFO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUN0RCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=