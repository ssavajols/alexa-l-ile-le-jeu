"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controls_1 = require("./Controls");
var data = require("./data/state-fr-FR.spec.json");
var Session_1 = require("./Session");
var State_1 = require("./State");
var Game = /** @class */ (function () {
    function Game(handler, actionType, language) {
        if (language === void 0) { language = 'fr-FR'; }
        this._speech = '';
        this.session = new Session_1.Session(handler);
        this.controls = new Controls_1.Controls(handler, actionType);
        this.state = new State_1.State(data, this.session.getAttribute('progress'));
    }
    Game.prototype.getSpeech = function () {
        this._speech = this._speech ? this._speech : this.state.next(this.controls.getAction() || '');
        this.session.setAttribute('progress', this.state.getProgress());
        return this._speech;
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
    Object.defineProperty(Game.prototype, "isEnd", {
        get: function () {
            var question = this.state.getQuestion();
            return question ? question.isEnd : false;
        },
        enumerable: true,
        configurable: true
    });
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBcUM7QUFDckMsbURBQW9EO0FBQ3BELHFDQUFtQztBQUNuQyxpQ0FBK0I7QUFFL0I7SUFRRSxjQUFhLE9BQTJCLEVBQUUsVUFBbUIsRUFBRSxRQUEwQjtRQUExQix5QkFBQSxFQUFBLGtCQUEwQjtRQUZqRixZQUFPLEdBQVcsRUFBRSxDQUFBO1FBRzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFFTSx3QkFBUyxHQUFoQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUM3RixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO1FBQy9ELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNyQixDQUFDO0lBRU0sbUJBQUksR0FBWDtRQUNFLE9BQU8sNkJBQTZCLENBQUE7SUFDdEMsQ0FBQztJQUVNLHdCQUFTLEdBQWhCO1FBQ0UsT0FBTyxRQUFRLENBQUE7SUFDakIsQ0FBQztJQUVNLG1CQUFJLEdBQVg7UUFDRSxPQUFPLGFBQWEsQ0FBQTtJQUN0QixDQUFDO0lBRU0sdUJBQVEsR0FBZjtRQUNFLE9BQU8sc0JBQXNCLENBQUE7SUFDL0IsQ0FBQztJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUN6QyxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQzFDLENBQUM7OztPQUFBO0lBRUgsV0FBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q1ksb0JBQUkifQ==