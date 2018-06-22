"use strict";
// const { log } = console
Object.defineProperty(exports, "__esModule", { value: true });
var State = /** @class */ (function () {
    function State(data) {
        this._progress = '';
        this._index = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this._data = data;
    }
    State.prototype.getMessage = function (actionName) {
        if (!this.getProgress()) {
            this.setProgress('A');
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
        var progress = "" + this.getProgress() + this.getActionIndex(actionName);
        return this.getQuestion(progress);
    };
    State.prototype.getActionIndex = function (actionName) {
        var question = this.getQuestion();
        var index = this._index[question.answers.indexOf(actionName)];
        return index ? "." + index : '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQTBCOztBQUUxQjtJQVFFLGVBQWEsSUFBSTtRQUpULGNBQVMsR0FBVyxFQUFFLENBQUE7UUFFdEIsV0FBTSxHQUFhLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUcvRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtJQUNuQixDQUFDO0lBRU0sMEJBQVUsR0FBakIsVUFBbUIsVUFBbUI7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUE7U0FDcEM7YUFBTSxJQUFJLFVBQVUsRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7U0FDekQ7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7U0FDaEM7SUFDSCxDQUFDO0lBRU0sMkJBQVcsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDdkIsQ0FBQztJQUVNLDJCQUFXLEdBQWxCLFVBQW9CLFFBQWdCO1FBQ2xDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUE7U0FDMUI7UUFFRCxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUMzQixDQUFDO0lBRU0sOEJBQWMsR0FBckIsVUFBdUIsUUFBZ0I7UUFDckMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFJLFFBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO1NBQ3BFO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBaUIsVUFBVTtRQUN6QixJQUFNLFFBQVEsR0FBRyxLQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBRyxDQUFBO1FBQzFFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRU8sOEJBQWMsR0FBdEIsVUFBd0IsVUFBVTtRQUNoQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQy9ELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFJLEtBQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFFTyxxQ0FBcUIsR0FBN0I7UUFDRSxPQUFPLFFBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLFlBQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFJLENBQUE7SUFDdkUsQ0FBQztJQUVPLGlDQUFpQixHQUF6QixVQUEyQixRQUE2QjtRQUE3Qix5QkFBQSxFQUFBLFdBQVcsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUN0RCxPQUFPLFFBQU0sUUFBUSxDQUFDLFFBQVEsZUFBVSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBTSxDQUFBO0lBQzNFLENBQUM7SUFFTywyQkFBVyxHQUFuQixVQUFxQixRQUE2QjtRQUE3Qix5QkFBQSxFQUFBLFdBQVcsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBSixDQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFFSCxZQUFDO0FBQUQsQ0FBQyxBQWxFRCxJQWtFQztBQWxFWSxzQkFBSyJ9