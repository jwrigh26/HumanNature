/* eslint-disable valid-jsdoc */

// Import and use like:
//    import { hasValue } from 'helpers/utils';

/**
 * Checks to see if your value has a truthy value. This is especially useful in
 * React.js code. Instead of needing to worry about the type of value you're
 * checking, you can simply use `hasValue`. Not to mention, you might forget to
 * check null or undefined in some cases.
 *
 * Quite often, you're writing code like:
 *
 * @example
 * <div>
 *   {data && (
 *     <div>{data.name}</div>
 *   )}
 * </div>
 *
 * This can instead be changed to:
 * @example
 * <div>
 *   {hasValue(data) && (
 *     <div>{data.name}</div>
 *   )}
 * </div>
 *
 * @param {any} value to check.
 *
 * @returns {boolean} Whether the `value` has a value.
 */
export function hasValue(value) {
  // Window is not an object or array, it's special.
  if (value === window) {
    return !isNil(value);
  }

  if (isDate(value)) {
    return true;
  }

  if (isObject(value) || Array.isArray(value)) {
    return !isEmpty(value);
  }

  // guards against blank and white spaces
  if (isString(value)) {
    const isEmptyString = !value || value.trim().length === 0;
    return !isEmptyString;
  }

  if (isNumeric(value)) {
    return true;
  }

  return false;
}

export const isEmpty = (obj) => {
  if ([Object, Array].includes((obj ?? {}).constructor)) {
    return !Object.entries(obj ?? {}).length;
  }

  if (isString(obj)) {
    return !hasValue(obj);
  }

  return false;
};

export function isNil(value) {
  // eslint-disable-next-line no-eq-null, eqeqeq
  return value == null;
}

export function isFunction(func) {
  return typeof func === 'function';
}

export function isNumeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

export function isObject(obj) {
  return obj?.constructor === Object;
}

export function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

export function trimSpaces(value) {
  return isString(value) ? value.trim() : value;
}

export function isDate(value) {
  return !isNil(value) && value instanceof Date && !isNaN(value.valueOf());
}

/**
 * Sorts an array by a property.
 *
 * @example
 * [{ name: 'a' }, { name: 'b'}].sort(sortBy(x => x.name))
 *
 * @param propertyAccessor {func} Function to access property of object.
 * @param isAsc {boolean} Sort by ascending order or not.
 *
 * @returns {func} Sort function to pass to Array.prototype.sort
 */
export function sortBy(propertyAccessor, isAsc = true) {
  const direction = isAsc ? 1 : -1;

  function getProperty(obj) {
    if (isFunction(propertyAccessor)) {
      return propertyAccessor(obj);
    } else if (isString(propertyAccessor)) {
      return obj[propertyAccessor];
    }

    throw new Error('Unsupported sort propertyAccessor in sortBy');
  }

  return (a, b) => {
    const aProp = getProperty(a);
    const bProp = getProperty(b);

    if (isString(aProp) && isString(bProp)) {
      return aProp.localeCompare(bProp) * direction;
    }

    return (aProp - bProp) * direction;
  };
}

export const sleep = ms => new Promise(r => setTimeout(r, ms));
