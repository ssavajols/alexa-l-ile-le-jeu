"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnswerEntity_1 = require("./AnswerEntity");
var errors_1 = require("./errors");
var QuestionEntity = /** @class */ (function () {
    function QuestionEntity(_data, id) {
        this._data = _data;
        this.id = '';
        this.question = '';
        this.answers = [];
        this.isEnd = false;
        if (!id) {
            throw new errors_1.QuestionMissingIdError();
        }
        else if (id.indexOf('.') !== -1) {
            this.setByProgress(id);
        }
        else if (id) {
            this.setById(id);
        }
    }
    QuestionEntity.prototype.setById = function (id) {
        var _this = this;
        if (!id)
            throw new errors_1.QuestionMissingIdError();
        this._find(this._data, id, function (key, o) {
            _this.set(key, o.question, o.answers, o.isEnd);
        });
        if (!this.id) {
            throw new errors_1.QuestionNotFoundError();
        }
    };
    QuestionEntity.prototype.setByProgress = function (progress) {
        var aProgress = progress.split('.');
        var o = aProgress.reduce(function (p, c) { return p[c]; }, this._data);
        this.set(aProgress[aProgress.length], o.question, o.answers, o.isEnd);
    };
    QuestionEntity.prototype.set = function (id, question, answers, isEnd) {
        var _this = this;
        this.id = id;
        this.question = question;
        this.isEnd = isEnd;
        this._clearAnswers();
        answers.forEach(function (label, index) {
            _this.answers.push(new AnswerEntity_1.AnwserEntity(index, label));
        });
    };
    QuestionEntity.prototype.getQuestionSpeech = function () {
        return "<p>" + this.question + "</p>" + this.getAnswerSpeech();
    };
    QuestionEntity.prototype.getAnswerSpeech = function () {
        if (this.answers.length === 0)
            return '';
        var answers = this.answers.map(function (a) { return a.getLabel(); }).join('. ');
        return "<p>" + answers + "</p>";
    };
    QuestionEntity.prototype.findAnswerIndexByValue = function (answer) {
        var f = this.answers.filter(function (a) { return a.getLabel() === answer; }).shift();
        return f ? f.getIndex() : -1;
    };
    QuestionEntity.prototype._find = function (el, id, cb) {
        var _this = this;
        Object.keys(el).forEach(function (key) {
            if (typeof el[key] === 'object' && key !== id) {
                return _this._find(el[key], id, cb);
            }
            else if (typeof el[key] === 'object' && key === id) {
                return cb(key, el[key]);
            }
        });
    };
    QuestionEntity.prototype._clearAnswers = function () {
        this.answers.length = 0;
    };
    return QuestionEntity;
}());
exports.QuestionEntity = QuestionEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25FbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJRdWVzdGlvbkVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE2QztBQUM3QyxtQ0FBd0U7QUFFeEU7SUFPRSx3QkFBcUIsS0FBSyxFQUFFLEVBQUU7UUFBVCxVQUFLLEdBQUwsS0FBSyxDQUFBO1FBTG5CLE9BQUUsR0FBVyxFQUFFLENBQUE7UUFDZixhQUFRLEdBQVcsRUFBRSxDQUFBO1FBQ3JCLFlBQU8sR0FBbUIsRUFBRSxDQUFBO1FBQzVCLFVBQUssR0FBWSxLQUFLLENBQUE7UUFHM0IsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE1BQU0sSUFBSSwrQkFBc0IsRUFBRSxDQUFBO1NBQ25DO2FBQU0sSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7U0FDdkI7YUFBTSxJQUFJLEVBQUUsRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7U0FDakI7SUFDSCxDQUFDO0lBRU0sZ0NBQU8sR0FBZCxVQUFnQixFQUFVO1FBQTFCLGlCQVVDO1FBVEMsSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLElBQUksK0JBQXNCLEVBQUUsQ0FBQTtRQUUzQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMvQyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1osTUFBTSxJQUFJLDhCQUFxQixFQUFFLENB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