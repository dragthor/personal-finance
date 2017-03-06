var { compoundInterest } = require('../src/util');

const chai = require("chai");
const expect = chai.expect;

describe("compound interest", () => {
    it("init balance of 1000 at .05 annual rate, compounded monthly after 10 years should grow to be 1647.01", () => {
        let actual = compoundInterest(1000, .05, 10);

        expect(actual).to.equal(1647.01);
    });
   
    it("init balance of 1000 at .01 annual rate, compounded monthly after 1 year should grow to be 1010.05", () => {
        let actual = compoundInterest(1000, .01, 1);

        expect(actual).to.equal(1010.05);
    });
});