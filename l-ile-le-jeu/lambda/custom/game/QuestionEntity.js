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
            _this.set(key, o.question, o.answers);
        });
        if (!this.id) {
            throw new errors_1.QuestionNotFoundError();
        }
    };
    QuestionEntity.prototype.setByProgress = function (progress) {
        var aProgress = progress.split('.');
        var o = aProgress.reduce(function (p, c) { return p[c]; }, this._data);
        this.set(aProgress[aProgress.length], o.question, o.answers);
    };
    QuestionEntity.prototype.set = function (id, question, answers) {
        var _this = this;
        this.id = id;
        this.question = question;
        answers.forEach(function (label, index) {
            _this.answers.push(new AnswerEntity_1.AnwserEntity(index, label));
        });
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
    return QuestionEntity;
}());
exports.QuestionEntity = QuestionEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25FbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJRdWVzdGlvbkVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE2QztBQUM3QyxtQ0FBd0U7QUFFeEU7SUFPRSx3QkFBcUIsS0FBSyxFQUFFLEVBQUU7UUFBVCxVQUFLLEdBQUwsS0FBSyxDQUFBO1FBTG5CLE9BQUUsR0FBVyxFQUFFLENBQUE7UUFDZixhQUFRLEdBQVcsRUFBRSxDQUFBO1FBQ3JCLFlBQU8sR0FBbUIsRUFBRSxDQUFBO1FBQzVCLFVBQUssR0FBWSxLQUFLLENBQUE7UUFHM0IsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE1BQU0sSUFBSSwrQkFBc0IsRUFBRSxDQUFBO1NBQ25DO2FBQU0sSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7U0FDdkI7YUFBTSxJQUFJLEVBQUUsRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7U0FDakI7SUFDSCxDQUFDO0lBRU0sZ0NBQU8sR0FBZCxVQUFnQixFQUFVO1FBQTFCLGlCQVVDO1FBVEMsSUFBSSxDQUFDLEVBQUU7WUFBRSxNQUFNLElBQUksK0JBQXNCLEVBQUUsQ0FBQTtRQUUzQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNaLE1BQU0sSUFBSSw4QkFBcUIsRUFBRSxDQUFBO1NBQ2xDO0lBQ0gsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXNCLFFBQVE7UUFDNUIsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNyQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBSixDQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRU0sNEJBQUcsR0FBVixVQUFZLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTztRQUFqQyxpQkFPQztRQU5DLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFFeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLO1lBQzNCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksMkJBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTyw4QkFBSyxHQUFiLFVBQWUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQXpCLGlCQVNDO1FBUkMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1lBQzFCLElBQUksT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7Z0JBQzdDLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO2FBQ25DO2lCQUFNLElBQUksT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7Z0JBQ3BELE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXRERCxJQXNEQztBQXREWSx3Q0FBYyJ9