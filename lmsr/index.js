let outcomes = 2;
let f = 10
let outcomesToInventory = [10, 10]

function calcInvariant() {
	let invariant = 0;

	outcomesToInventory.forEach((shares) => {
		invariant += outcomes ** (-shares / f);
	})

	return invariant;
}

function calcPrice(outcome) {
	return outcomes ** (-outcomesToInventory[outcome] / f);
}

function buyShares(spend, outcome) {
	console.log(f);
	outcomesToInventory = outcomesToInventory.map(amt => {
		return amt + spend;
	})

	// TODO find way to restore invariant
}
logState();
buyShares(10);
logState();

// helpers: 
function logState() {
	console.log("invariant", calcInvariant());
	console.log("price: ", calcPrice(0));
}