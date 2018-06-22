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
        this.state = new State_1.State(data);
        this.state.setProgress(this.session.getAttribute('progress'));
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
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBcUM7QUFDckMsbURBQW9EO0FBQ3BELHFDQUFtQztBQUNuQyxpQ0FBK0I7QUFFL0I7SUFRRSxjQUFhLE9BQTJCLEVBQUUsVUFBbUIsRUFBRSxRQUEwQjtRQUExQix5QkFBQSxFQUFBLGtCQUEwQjtRQUZqRixZQUFPLEdBQVcsRUFBRSxDQUFBO1FBRzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRTVCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDL0QsQ0FBQztJQUVNLHdCQUFTLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzdGLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7UUFDL0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBQ0UsT0FBTyw2QkFBNkIsQ0FBQTtJQUN0QyxDQUFDO0lBRU0sd0JBQVMsR0FBaEI7UUFDRSxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0lBRU0sbUJBQUksR0FBWDtRQUNFLE9BQU8sYUFBYSxDQUFBO0lBQ3RCLENBQUM7SUFFTSx1QkFBUSxHQUFmO1FBQ0UsT0FBTyxzQkFBc0IsQ0FBQTtJQUMvQixDQUFDO0lBRUgsV0FBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksb0JBQUkifQ==