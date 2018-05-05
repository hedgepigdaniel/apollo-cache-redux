'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function weCareAbout(val) {
    return val !== null &&
        (Array.isArray(val) ||
            isObjectLike(val));
}
exports.weCareAbout = weCareAbout;
function isObjectLike(val) {
    return typeof val === 'object' &&
        val.constructor === Object &&
        Object.getPrototypeOf(val) === Object.prototype;
}
function cloneObj(obj) {
    var newObj = {};
    var keys = Object.keys(obj);
    var idx = keys.length;
    var key;
    while (idx--) {
        key = keys[idx];
        newObj[key] = obj[key];
    }
    return newObj;
}
function clone(coll) {
    if (Array.isArray(coll)) {
        return coll.slice();
    }
    else {
        return cloneObj(coll);
    }
}
function assoc(coll, key, value) {
    if (coll[key] === value) {
        return coll;
    }
    var newObj = clone(coll);
    newObj[key] = value;
    return newObj;
}
exports.assoc = assoc;
function merge(target, source) {
    if (target == null || source == null) {
        return target;
    }
    return Object.keys(source).reduce(function (obj, key) {
        var sourceVal = source[key];
        var targetVal = obj[key];
        if (weCareAbout(sourceVal) && weCareAbout(targetVal)) {
            if (sourceVal === targetVal) {
                return obj;
            }
            if (Array.isArray(sourceVal)) {
                return assoc(obj, key, sourceVal);
            }
            return assocIfDifferent(obj, key, merge(targetVal, sourceVal));
        }
        return assocIfDifferent(obj, key, sourceVal);
    }, target);
}
exports.merge = merge;
function assocIfDifferent(target, key, value) {
    if (target[key] === value) {
        return target;
    }
    return assoc(target, key, value);
}
//# sourceMappingURL=merge.js.map