"use strict";
// const { log } = console
Object.defineProperty(exports, "__esModule", { value: true });
var State = /** @class */ (function () {
    function State(data) {
        this._progress = '';
        this._data = data;
    }
    State.prototype.next = function (actionName) {
        if (!this.getProgress()) {
            this.setProgress('Q1');
            return this.getIntroductionSpeech();
        }
        else if (actionName) {
            return this.getQuestionSpeech(this.doAction(actionName));
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
        }
        return this.getProgress();
    };
    State.prototype.updateProgress = function (progress) {
        if (progress) {
            this._progress += this._progress.length ? "." + progress : progress;
        }
        return this.getProgress();
    };
    State.prototype.doAction = function (actionName) {
        this.setProgress("" + this.getProgress() + this.getActionIndex(actionName));
        return this.getQuestion(this.getProgress());
    };
    State.prototype.getActionIndex = function (actionName) {
        var question = this.getQuestion();
        var progress = this.getProgress();
        var aProgress = progress.split('.');
        var answerIndex = question.answers.indexOf(actionName) + 1;
        var currentQuestion = aProgress[aProgress.length - 1];
        return answerIndex > 0 ? "." + (currentQuestion + answerIndex.toString()) : '';
    };
    State.prototype.getIntroductionSpeech = function () {
        return "<p>" + this._data.introduction + "</p>" + this.getQuestionSpeech();
    };
    State.prototype.getQuestionSpeech = function (question) {
        if (question === void 0) { question = this.getQuestion(); }
        return "<p>" + question.question + "</p><p>" + question.answers.join('\r') + "</p>";
    };
    State.prototype.getQuestion = function (progress) {
        if (progress === void 0) { progress = this.getProgress(); }
        return progress.split('.').reduce(function (p, c) { return p[c]; }, this._data);
    };
    return State;
}());
exports.State = State;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQTBCOztBQUUxQjtJQU1FLGVBQWEsSUFBSTtRQUZULGNBQVMsR0FBVyxFQUFFLENBQUE7UUFHNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7SUFDbkIsQ0FBQztJQUVNLG9CQUFJLEdBQVgsVUFBYSxVQUFtQjtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDdEIsT0FBTyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtTQUNwQzthQUFNLElBQUksVUFBVSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtTQUN6RDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtTQUNoQztJQUNILENBQUM7SUFFTSwyQkFBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN2QixDQUFDO0lBRU0sMkJBQVcsR0FBbEIsVUFBb0IsUUFBZ0I7UUFDbEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtTQUMxQjtRQUVELE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQzNCLENBQUM7SUFFTSw4QkFBYyxHQUFyQixVQUF1QixRQUFnQjtRQUNyQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQUksUUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUE7U0FDcEU7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBRU0sd0JBQVEsR0FBZixVQUFpQixVQUFVO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUcsQ0FBQyxDQUFBO1FBQzNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRU8sOEJBQWMsR0FBdEIsVUFBd0IsVUFBVTtRQUNoQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbkMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ25DLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDckMsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVELElBQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELE9BQU8sV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBSSxlQUFlLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUM5RSxDQUFDO0lBRU8scUNBQXFCLEdBQTdCO1FBQ0UsT0FBTyxRQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxZQUFPLElBQUksQ0FBQyxpQkFBaUIsRUFBSSxDQUFBO0lBQ3ZFLENBQUM7SUFFTyxpQ0FBaUIsR0FBekIsVUFBMkIsUUFBNkI7UUFBN0IseUJBQUEsRUFBQSxXQUFXLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDdEQsT0FBTyxRQUFNLFFBQVEsQ0FBQyxRQUFRLGVBQVUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQU0sQ0FBQTtJQUMzRSxDQUFDO0lBRU8sMkJBQVcsR0FBbkIsVUFBcUIsUUFBNkI7UUFBN0IseUJBQUEsRUFBQSxXQUFXLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDaEQsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUosQ0FBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBRUgsWUFBQztBQUFELENBQUMsQUFuRUQsSUFtRUM7QUFuRVksc0JBQUsifQ==