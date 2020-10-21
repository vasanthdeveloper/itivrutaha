"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const defaultConfig = {
    theme: ':type :message',
    color: true,
    verboseIdentifier: {
        node: ['--verbose', '-v'],
        web: ['localhost'],
    },
};
const create = (config) => __awaiter(void 0, void 0, void 0, function* () {
    if (!config)
        return;
    for (const obj in defaultConfig) {
        if (config[obj] === undefined) {
            config[obj] = defaultConfig[obj];
        }
    }
    return;
});
const exported = Object.create(null);
exported.create = create;
try {
    window['itivrutaha'] = exported;
}
catch (_a) {
    true;
}
module.exports = exported;
