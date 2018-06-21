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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHVDQUFxQztBQUNyQyxxQ0FBbUM7QUFFbkM7SUFNRSxjQUFhLE9BQTJCO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRXZDLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBQ0UsT0FBTyw2QkFBNkIsQ0FBQTtJQUN0QyxDQUFDO0lBRU0sd0JBQVMsR0FBaEI7UUFDRSxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0lBRU0sbUJBQUksR0FBWDtRQUNFLE9BQU8sYUFBYSxDQUFBO0lBQ3RCLENBQUM7SUFFTSx1QkFBUSxHQUFmO1FBQ0UsT0FBTyxzQkFBc0IsQ0FBQTtJQUMvQixDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1Qlksb0JBQUkifQ==