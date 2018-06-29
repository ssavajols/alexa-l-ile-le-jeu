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
        return Config._data = require("./data/" + filename);
    };
    Config._getDataFilename = function () {
        switch (Config._env) {
            case 'test':
                return "state-" + Config._locale + ".spec.json";
            default:
                return "state-" + Config._locale + ".json";
        }
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTREO0FBRTVEO0lBQUE7SUE4QkEsQ0FBQztJQXhCZSxnQkFBUyxHQUF2QjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE1BQU0sSUFBSSwyQkFBa0IsRUFBRSxDQUFBO1FBQy9DLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRWEsV0FBSSxHQUFsQixVQUFvQixNQUFjO1FBQ2hDLElBQUksQ0FBQyxNQUFNO1lBQUUsTUFBTSxJQUFJLHNCQUFhLEVBQUUsQ0FBQTtRQUV0QyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtRQUN2QixNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFBO1FBRWxDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQzFDLE9BQU8sTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBVSxRQUFVLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRWMsdUJBQWdCLEdBQS9CO1FBQ0UsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUssTUFBTTtnQkFDVCxPQUFPLFdBQVMsTUFBTSxDQUFDLE9BQU8sZUFBWSxDQUFBO1lBRTVDO2dCQUNFLE9BQU8sV0FBUyxNQUFNLENBQUMsT0FBTyxVQUFPLENBQUE7U0FDeEM7SUFDSCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5Qlksd0JBQU0ifQ==