/**
 * Checks if value is null or undefined
 * @param value value to be checked
 * @return {boolean}
 */
export const isNullOrUndefined = (value) => value === null || value === undefined;

/**
 * Checks if value is a number and is finite
 * @param value value to be checked
 * @return {boolean}
 */
export const isNumber = (value) => typeof value === 'number' && isFinite(value);
