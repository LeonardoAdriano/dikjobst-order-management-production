"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGermanDate = exports.DAY_NAMES = void 0;
exports.DAY_NAMES = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
];
function toGermanDate(date) {
    const month = ('0' + String(date.getMonth() + 1)).slice(-2);
    const day = ('0' + String(date.getDate())).slice(-2);
    return `${day}.${month}.${date.getFullYear()}`;
}
exports.toGermanDate = toGermanDate;
//# sourceMappingURL=date.js.map