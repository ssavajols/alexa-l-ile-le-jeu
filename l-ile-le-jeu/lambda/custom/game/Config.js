"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.getConfig = function () {
        if (!this._data)
            throw new errors_1.DataNotLoadedError();
        return Config._data;
    };
    Config.load = function (locale) {
        if (!locale)
            throw new errors_1.NoLocaleError();
        Config._locale = locale;
        Config._env = process.env.NODE_ENV;
        var filename = Config._getDataFilename();
        return (Config._data = require("./data/" + filename));
    };
    Config._getDataFilename = function () {
        switch (Config._env) {
            case 'test':
                return "state-" + Config._locale + ".spec.json";
            default:
                return "state-" + Config._locale + ".prod.json";
        }
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTREO0FBRTVEO0lBQUE7SUE2QkEsQ0FBQztJQXhCZSxnQkFBUyxHQUF2QjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE1BQU0sSUFBSSwyQkFBa0IsRUFBRSxDQUFBO1FBQy9DLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRWEsV0FBSSxHQUFsQixVQUFvQixNQUFjO1FBQ2hDLElBQUksQ0FBQyxNQUFNO1lBQUUsTUFBTSxJQUFJLHNCQUFhLEVBQUUsQ0FBQTtRQUV0QyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtRQUN2QixNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFBO1FBRWxDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQzFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFVLFFBQVUsQ0FBQyxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQUVjLHVCQUFnQixHQUEvQjtRQUNFLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLE1BQU07Z0JBQ1QsT0FBTyxXQUFTLE1BQU0sQ0FBQyxPQUFPLGVBQVksQ0FBQTtZQUU1QztnQkFDRSxPQUFPLFdBQVMsTUFBTSxDQUFDLE9BQU8sZUFBWSxDQUFBO1NBQzdDO0lBQ0gsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLHdCQUFNIn0=