const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let { repeatTimes, separator = '+', addition = '', additionRepeatTimes, additionSeparator = '|' } = options;
  let final_sep = addition;
  let res = '';

  for (let i = 1; i < additionRepeatTimes; i++) {
    final_sep += additionSeparator + addition;
  }

  for (let i = 1; i < repeatTimes; i++) {
    res += separator + str + final_sep;
  }

  res = str + final_sep + res;
  return res;
};
  