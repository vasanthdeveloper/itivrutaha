"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var renderer_1 = __importDefault(require("./renderer"));
function validate(message) {
    if (message === undefined) {
        return false;
    }
    else {
        return true;
    }
}
exports.validate = validate;
var LoggerClass = (function () {
    function LoggerClass(loggerConfig) {
        this.loggerConfig = loggerConfig;
    }
    LoggerClass.prototype.success = function (message) {
        if (validate(message) == true) {
            console.log(renderer_1.default('success', message, this.loggerConfig));
        }
    };
    LoggerClass.prototype.note = function (message) {
        if (validate(message) == true) {
            console.log(renderer_1.default('note', message, this.loggerConfig));
        }
    };
    LoggerClass.prototype.info = function (message) {
        if (validate(message) == true) {
            console.log(renderer_1.default('info', message, this.loggerConfig));
        }
    };
    LoggerClass.prototype.okay = function (message) {
        if (validate(message) == true) {
            console.log(renderer_1.default('okay', message, this.loggerConfig));
        }
    };
    LoggerClass.prototype.verbose = function (message) {
        var found = this.loggerConfig.verboseIdentifier.some(function (argument) { return process.argv.includes(argument); });
        if (found) {
            if (validate(message) == true) {
                console.log(renderer_1.default('verbose', message, this.loggerConfig));
            }
        }
    };
    LoggerClass.prototype.warning = function (message) {
        if (validate(message) == true) {
            if (typeof message === 'string') {
                console.log(renderer_1.default('warning', message, this.loggerConfig));
            }
            else {
                console.log(renderer_1.default('warning', message.message, this.loggerConfig));
            }
        }
    };
    LoggerClass.prototype.error = function (message, exitCode) {
        if (validate(message) == true) {
            if (typeof message === 'string') {
                console.log(renderer_1.default('error', message, this.loggerConfig));
            }
            else {
                console.log(renderer_1.default('error', message.message, this.loggerConfig));
            }
            if (exitCode) {
                process.exit(exitCode);
            }
        }
    };
    return LoggerClass;
}());
exports.LoggerClass = LoggerClass;
//# sourceMappingURL=loggerClass.js.map