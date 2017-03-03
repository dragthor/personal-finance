const chai = require("chai");
const expect = chai.expect;

describe("sample test", () => {
    it("sample test should be okay", () => {
        let actual = true;

        expect(actual).to.equal(true);
    });
});