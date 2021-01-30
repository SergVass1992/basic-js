const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    if (array.length === 0) return 1;
    if (Array.isArray(array)) {
      return Math.max(...array.map((arrItem) => this.calculateDepth(arrItem))) + 1;
    }
    return 0;
  }
};