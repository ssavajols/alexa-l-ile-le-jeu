"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controls_1 = require("./Controls");
var data = require("./data/state-fr-FR.spec.json");
var Session_1 = require("./Session");
var State_1 = require("./State");
var Game = /** @class */ (function () {
    function Game(handler, actionType, language) {
        if (language === void 0) { language = 'fr-FR'; }
        this.session = new Session_1.Session(handler);
        this.controls = new Controls_1.Controls(handler, actionType);
        this.state = new State_1.State(data);
        this.state.setProgress(this.session.getAttribute('progress'));
    }
    Game.prototype.getSpeech = function () {
        return this.state.getMessage(this.controls.getAction() || '');
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBcUM7QUFDckMsbURBQW9EO0FBQ3BELHFDQUFtQztBQUNuQyxpQ0FBK0I7QUFFL0I7SUFNRSxjQUFhLE9BQTJCLEVBQUUsVUFBbUIsRUFBRSxRQUEwQjtRQUExQix5QkFBQSxFQUFBLGtCQUEwQjtRQUN2RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUU1QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFFTSx3QkFBUyxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBRU0sbUJBQUksR0FBWDtRQUNFLE9BQU8sNkJBQTZCLENBQUE7SUFDdEMsQ0FBQztJQUVNLHdCQUFTLEdBQWhCO1FBQ0UsT0FBTyxRQUFRLENBQUE7SUFDakIsQ0FBQztJQUVNLG1CQUFJLEdBQVg7UUFDRSxPQUFPLGFBQWEsQ0FBQTtJQUN0QixDQUFDO0lBRU0sdUJBQVEsR0FBZjtRQUNFLE9BQU8sc0JBQXNCLENBQUE7SUFDL0IsQ0FBQztJQUVILFdBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLG9CQUFJIn0=