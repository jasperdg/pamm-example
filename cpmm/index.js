let outcomes = 3;
let funding = 10;

let outcomesToInventory = [];
for (var i = 0; i < outcomes; i++) {
	outcomesToInventory.push(funding);
}
let expectedInvariant = productOfArr(outcomesToInventory);

function productOfArr(arr) {
	return arr.reduce((product, val) => {
		return product * val
	})
}

function calcInvariant() {
	return productOfArr(outcomesToInventory);
}

function getInverseOutcomes(outcome) {
	return outcomesToInventory.filter((val, outcomeId) => outcomeId !== outcome);
}

function getOddsWeightForOutcome(outcome) {

	let inverseOutcomes = getInverseOutcomes(outcome)

	return inverseOutcomes.reduce((product, val) => {
		return product * val
	})
}

function calcPrice(outcome) {
	let weight = getOddsWeightForOutcome(outcome);
	let totalInverseWeight = 0;
	
	outcomesToInventory.forEach((d, i) => {
		totalInverseWeight += getOddsWeightForOutcome(i);
	})

	return weight / totalInverseWeight;
}


function buyShares(spend, outcome) {
	outcomesToInventory = outcomesToInventory.map(amt => {
		return amt + spend;
	})

	let sharesToReturn = restoreInvariant(outcome);
	return sharesToReturn;
}

function restoreInvariant(outcome) {
	const inverseOutcomes = getInverseOutcomes(outcome);
	const product = productOfArr(inverseOutcomes);

	const newOutcomeBalance = expectedInvariant / product;
	const toReturn = outcomesToInventory[outcome] - newOutcomeBalance;
	outcomesToInventory[outcome] = newOutcomeBalance;

	return toReturn;
}

logState();
console.log("purchased tokens: ", buyShares(10, 1));
logState();

// helpers: 
function logState() {
	console.log("invariant ", calcInvariant());
	for (var i = 0; i < outcomes; i++) {
		console.log("price for share in outcome " + i + " $" + calcPrice(i));
	}
}