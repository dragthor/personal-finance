module.exports = {
	compoundInterest
}

function compoundInterest(principal, rate, years) {
    // http://moneychimp.com/articles/finworks/fmfutval.htm
    var FV = principal * Math.pow(1 + (rate / 12), years * 12);

    return parseFloat(parseFloat(FV).toFixed(2));
}