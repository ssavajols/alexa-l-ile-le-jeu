"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controls_1 = require("./Controls");
var Session_1 = require("./Session");
var Game = /** @class */ (function () {
    function Game(handler) {
        this.session = new Session_1.Session(handler);
        this.controls = new Controls_1.Controls(handler);
    }
    Game.prototype.help = function () {
        return 'help message must be here !';
    };
    Game.prototype.skillName = function () {
        return 'le jeu';
    };
    Game.prototype.stop = function () {
        return 'Au revoir !';
    };
    Game.prototype.fallback = function () {
        return 'Commande non reconnu';
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBcUM7QUFDckMscUNBQW1DO0FBRW5DO0lBTUUsY0FBYSxPQUEyQjtRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUV2QyxDQUFDO0lBRU0sbUJBQUksR0FBWDtRQUNFLE9BQU8sNkJBQTZCLENBQUE7SUFDdEMsQ0FBQztJQUVNLHdCQUFTLEdBQWhCO1FBQ0UsT0FBTyxRQUFRLENBQUE7SUFDakIsQ0FBQztJQUVNLG1CQUFJLEdBQVg7UUFDRSxPQUFPLGFBQWEsQ0FBQTtJQUN0QixDQUFDO0lBRU0sdUJBQVEsR0FBZjtRQUNFLE9BQU8sc0JBQXNCLENBQUE7SUFDL0IsQ0FBQztJQUVILFdBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLG9CQUFJIn0=