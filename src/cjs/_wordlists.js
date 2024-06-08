"use strict";
// browserify by default only pulls in files that are hard coded in await imports
// In order of last to first in this file, the default wordlist will be chosen
// based on what is present. (Bundles may remove wordlists they don't need)
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const url_1 = require("url");
const wordlists = {};
exports.wordlists = wordlists;
let _default;
exports._default = _default;
const modulePath = path_1.dirname(url_1.fileURLToPath(__dirname));
const readWordLists = (wordlist) => JSON.parse(fs_1.readFileSync(path_1.resolve(modulePath, '..', 'wordlists', wordlist), {
    encoding: 'utf8',
}));
(async () => {
    try {
        exports._default = _default = readWordLists('czech.json');
        wordlists.czech = _default;
    }
    catch (err) {
        console.log(err);
    }
    try {
        exports._default = _default = readWordLists('chinese_simplified.json');
        wordlists.chinese_simplified = _default;
    }
    catch (err) { }
    try {
        exports._default = _default = readWordLists('chinese_traditional.json');
        wordlists.chinese_traditional = _default;
    }
    catch (err) { }
    try {
        exports._default = _default = readWordLists('korean.json');
        wordlists.korean = _default;
    }
    catch (err) { }
    try {
        exports._default = _default = readWordLists('french.json');
        wordlists.french = _default;
    }
    catch (err) { }
    try {
        exports._default = _default = readWordLists('italian.json');
        wordlists.italian = _default;
    }
    catch (err) { }
    try {
        exports._default = _default = readWordLists('spanish.json');
        wordlists.spanish = _default;
    }
    catch (err) { }
    try {
        exports._default = _default = readWordLists('japanese.json');
        wordlists.japanese = _default;
        wordlists.JA = _default;
    }
    catch (err) { }
    try {
        exports._default = _default = readWordLists('portuguese.json');
        wordlists.portuguese = _default;
    }
    catch (err) { }
    try {
        exports._default = _default = readWordLists('english.json');
        wordlists.english = _default;
        wordlists.EN = _default;
    }
    catch (err) { }
})();
