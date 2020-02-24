export const isNullObject = function (obj) {
    return obj===undefined||JSON.stringify(obj) === "{}" || obj === "" || obj === null;
}

export const isEmptyString = function (str) {
    return str === undefined || str === null || str.length === 0;
}

export const isNotEmptyString = function (str) {
  return !isEmptyString(str)
}