"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("./Config");
var Controls_1 = require("./Controls");
var Session_1 = require("./Session");
var State_1 = require("./State");
var Game = /** @class */ (function () {
    function Game(handler, actionType, language) {
        if (language === void 0) { language = 'fr-FR'; }
        this._speech = '';
        this._data = Config_1.Config.load(language);
        this.session = new Session_1.Session(handler);
        this.controls = new Controls_1.Controls(handler, actionType);
        this.state = new State_1.State(this._data, this.session.getAttribute('progress'));
    }
    Game.prototype.getSpeech = function () {
        this._speech = this._speech
            ? this._speech
            : this.state.next(this.controls.getAction() || '');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtQ0FBaUM7QUFDakMsdUNBQXFDO0FBQ3JDLHFDQUFtQztBQUNuQyxpQ0FBK0I7QUFFL0I7SUFRRSxjQUNFLE9BQTJCLEVBQzNCLFVBQW1CLEVBQ25CLFFBQTBCO1FBQTFCLHlCQUFBLEVBQUEsa0JBQTBCO1FBTHBCLFlBQU8sR0FBVyxFQUFFLENBQUE7UUFPMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRU0sd0JBQVMsR0FBaEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7UUFDL0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3JCLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBQ0UsT0FBTyw2QkFBNkIsQ0FBQTtJQUN0QyxDQUFDO0lBRU0sd0JBQVMsR0FBaEI7UUFDRSxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0lBRU0sbUJBQUksR0FBWDtRQUNFLE9BQU8sYUFBYSxDQUFBO0lBQ3RCLENBQUM7SUFFTSx1QkFBUSxHQUFmO1FBQ0UsT0FBTyxzQkFBc0IsQ0FBQTtJQUMvQixDQUFDO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQ3pDLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDMUMsQ0FBQzs7O09BQUE7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxvQkFBSSJ9