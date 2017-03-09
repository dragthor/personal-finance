const chai = require("chai");
const expect = chai.expect;

const { compoundInterest, simpleInterest, returnOnInvestment } = require('../src/util');

describe("compound interest", () => {
    it("original balance of 1000 at .05 annual rate, compounded monthly after 10 years should be 1647.01", () => {
        let actual = compoundInterest(1000, .05, 10);

        expect(actual).to.equal(1647.01);
    });
   
    it("original balance of 1000 at .01 annual rate, compounded monthly after 1 year should be 1010.05", () => {
        let actual = compoundInterest(1000, .01, 1);

        expect(actual).to.equal(1010.05);
    });
});

describe("simple interest", () => {
    it("original balance of 10000 at a .0475 rate, per year for 5 years should be 12375.00", () => {
        let actual = simpleInterest(10000, .0475, 5);

        expect(actual).to.equal(12375.00);
    });
});

describe("return on investment", () => {
    it("original balance of 1000 with a current value of 1300 should be 30.00 percent ROI", () => {
        let actual = returnOnInvestment(1000, 1300);

        expect(actual).to.equal(30.00);
    });
    
    it("original balance of 1000 with a current value of 900 should be -10.00 percent ROI", () => {
        let actual = returnOnInvestment(1000, 900);

        expect(actual).to.equal(-10.00);
    });
});