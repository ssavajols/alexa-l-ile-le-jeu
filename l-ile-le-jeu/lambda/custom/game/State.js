"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
var QuestionEntity_1 = require("./QuestionEntity");
var State = /** @class */ (function () {
    function State(data, progress) {
        this._progress = '';
        this._data = data;
        this.setProgress(progress);
    }
    State.prototype.next = function (actionName) {
        if (!this.getProgress()) {
            this.setProgress('Q1');
            return this.getIntroductionSpeech();
        }
        else if (actionName) {
            this.doAction(actionName);
            return this.getQuestionSpeech();
        }
        else {
            return this.getQuestionSpeech();
        }
    };
    State.prototype.getProgress = function () {
        return this._progress;
    };
    State.prototype.setProgress = function (progress) {
        if (progress) {
            this._progress = progress;
            this.setQuestion();
        }
        return this.getProgress();
    };
    State.prototype.updateProgress = function (progress) {
        if (progress) {
            this._progress += this._progress.length ? "." + progress : progress;
            this.setQuestion();
        }
        return this.getProgress();
    };
    State.prototype.getQuestion = function () {
        return this._question;
    };
    State.prototype.doAction = function (actionName) {
        if (!this._question) {
            throw new errors_1.QuestionNotDefined();
        }
        this.setProgress("" + this.getProgress() + this.getActionIndex(actionName));
        return this._question;
    };
    State.prototype.getActionIndex = function (actionName) {
        if (!this._question) {
            throw new errors_1.QuestionNotDefined();
        }
        var answerIndex = this._question.findAnswerIndexByValue(actionName) + 1;
        var currentQuestion = this.getProgress().split('.').pop();
        return answerIndex > 0 ? "." + (currentQuestion + answerIndex.toString()) : '';
    };
    State.prototype.getIntroductionSpeech = function () {
        return "<p>" + this._data.introduction + "</p>" + this.getQuestionSpeech();
    };
    State.prototype.getQuestionSpeech = function () {
        return this._question ? this._question.getQuestionSpeech() : '';
    };
    State.prototype.setQuestion = function () {
        return this._question = new QuestionEntity_1.QuestionEntity(this._data, this._progress.split('.').pop());
    };
    return State;
}());
exports.State = State;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUE2QztBQUM3QyxtREFBaUQ7QUFFakQ7SUFRRSxlQUFhLElBQUksRUFBRSxRQUFTO1FBSnBCLGNBQVMsR0FBVyxFQUFFLENBQUE7UUFLNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRU0sb0JBQUksR0FBWCxVQUFhLFVBQW1CO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN0QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO1NBQ3BDO2FBQU0sSUFBSSxVQUFVLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN6QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1NBQ2hDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO1NBQ2hDO0lBQ0gsQ0FBQztJQUVNLDJCQUFXLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3ZCLENBQUM7SUFFTSwyQkFBVyxHQUFsQixVQUFvQixRQUFnQjtRQUNsQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUNuQjtRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFFTSw4QkFBYyxHQUFyQixVQUF1QixRQUFnQjtRQUNyQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQUksUUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUE7WUFDbkUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQ25CO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVNLDJCQUFXLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3ZCLENBQUM7SUFFTSx3QkFBUSxHQUFmLFVBQWlCLFVBQWtCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE1BQU0sSUFBSSwyQkFBa0IsRUFBRSxDQUFBO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBRyxDQUFDLENBQUE7UUFDM0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3ZCLENBQUM7SUFFTyw4QkFBYyxHQUF0QixVQUF3QixVQUFrQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixNQUFNLElBQUksMkJBQWtCLEVBQUUsQ0FBQTtTQUMvQjtRQUNELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pFLElBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDM0QsT0FBTyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0lBQzlFLENBQUM7SUFFTyxxQ0FBcUIsR0FBN0I7UUFDRSxPQUFPLFFBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLFlBQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFJLENBQUE7SUFDdkUsQ0FBQztJQUVPLGlDQUFpQixHQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7SUFDakUsQ0FBQztJQUVPLDJCQUFXLEdBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFDekYsQ0FBQztJQUVILFlBQUM7QUFBRCxDQUFDLEFBaEZELElBZ0ZDO0FBaEZZLHNCQUFLIn0=