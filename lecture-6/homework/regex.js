// Proverka dali postojat drugi karakteri osven brojki i bukvi
function is_alphaNumeric(str) {
  regexp = /^[A-Za-z0-9]+$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(is_alphaNumeric("37828##@@sad"));

// Proverka dali e tocen makednoskiot postenski broj
function is_mkPostCode(str) {
  regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(is_mkPostCode("1000"));

// g -- global search
// i -- Case-insensitive search
// m -- multi-line serach
// [abc] -- Find any character between the brackets
// /w -- find word character
// /d -- find digit
// ^A -- find word that start with A
// A& -- find word that end with A
