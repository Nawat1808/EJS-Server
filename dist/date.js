"use strict";
module.exports.getDateNow = getDateNow;
function getDateNow() {
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date().toLocaleDateString('th-TH', dateOptions);
}
module.exports.otherFunction = otherFunction;
function otherFunction() {
    return 'otherFunction';
}
//# sourceMappingURL=date.js.map