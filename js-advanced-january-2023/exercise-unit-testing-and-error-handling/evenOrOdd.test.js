const isOddOrEven = require("./evenOrOdd");
const { expect } = require("chai");

describe("isOddOrEven", () => {
    it("Should return even if string length is even number", () => {
        expect(isOddOrEven("test")).to.equal("even");
    });
    it("Should return odd if string length is odd number", () => {
        expect(isOddOrEven("numbers")).to.equal("odd");
    });
    it("Should return undefined if the argument is not a string", () => {
        expect(isOddOrEven(10)).to.equal(undefined);
    });
});
