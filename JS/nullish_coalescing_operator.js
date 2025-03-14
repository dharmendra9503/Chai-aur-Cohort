/**
 * The nullish coalescing operator (??) in JavaScript is used to provide a default value 
 * when dealing with null or undefined values. It allows you to define a fallback value in 
 * cases where a value is specifically null or undefined, but not for other falsy values like 0, '', false, or NaN.
 */

let a = undefined;
let result = a ?? 'default';
console.log(result); // Output: 'default'

/**
 * How It is different from || (OR) operator:
 * 
 * The nullish coalescing operator (??) returns the value on the left if it is not null or undefined, 
 * while the OR operator (||) returns the value on the right if the left operand is falsy (false, 0, "", null, undefined, NaN).
 */
console.log(0 ?? 42);  // Output: 0 (because 0 is not null or undefined)
console.log(0 || 42);  // Output: 42 (because 0 is falsy)


function getConfig(userConfig) {
    let timeout = userConfig.timeout ?? 3000;
    console.log(timeout);
}

getConfig({ timeout: 0 }); // Output: 0
getConfig({}); // Output: 3000


/**
 * NOTE
 * 
 * Use ?? when you only care about null or undefined values (not falsy values).
 * Use || when you want to handle all falsy values (0, false, '', NaN, null, undefined).
 * Avoid mixing ?? with && and || without parentheses to avoid syntax errors.
 * Use ?? for setting defaults or handling optional values in functions and objects.
 */