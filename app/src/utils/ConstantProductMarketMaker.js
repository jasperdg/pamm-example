import PurchaseShares from "../components/CPMM/PurchaseShares";

export default class ConstantProductMarketMaker {
	constructor(outcomes, funding) {
		this.outcomes = outcomes;
		this.funding = funding;
		this.outcomesToInventory = [];
		this.outcomesToUserBalance = [];
		for (let i = 0; i < outcomes; i++) {
			this.outcomesToInventory.push(funding);
			this.outcomesToUserBalance.push(0);
		}

		this.outcomesToOddsEstimates = []
		for (let i = 0; i < outcomes; i++) {
			this.outcomesToOddsEstimates.push(this.getOddsEstimate(i));
		}

		this.invariant = this.calcInvariant();
	}

	setOddEstimates() {
		this.outcomesToOddsEstimates = this.outcomesToInventory.map((_, i) => {
			return this.getOddsEstimate(i);
		})
	}

	getOddsEstimate(outcome) {
		let weight = this.getOddsWeightForOutcome(outcome);
		let totalInverseWeight = 0;
		
		this.outcomesToInventory.forEach((d, i) => {
			totalInverseWeight += parseInt(this.getOddsWeightForOutcome(i));
		})
		
		return weight / totalInverseWeight;
	}

	getOddsWeightForOutcome(outcome) {
		let inverseOutcomes = this.getInverseOutcomes(outcome, this.outcomesToInventory)
		
		return inverseOutcomes.reduce((product, val) => {
			return product * val
		})
	}

	getInverseOutcomes(outcome) {
		return this.outcomesToInventory.filter((val, outcomeId) => outcomeId !== outcome);
	}

	productOfArr(arr) {
		return arr.reduce((product, val) => {
			return product * val
		})
	}

	calcInvariant() {
			return this.productOfArr(this.outcomesToInventory);
	}
	
	buyShares(outcome, spend) {
		this.outcomesToInventory = this.outcomesToInventory.map(amt => {
			return parseInt(amt) + parseInt(spend);
		})

		let sharesBought = this.restoreInvariant(outcome);
		this.outcomesToUserBalance[outcome] += parseInt(sharesBought);
		this.setOddEstimates();
	}

	restoreInvariant(outcome) {
		const inverseOutcomes = this.getInverseOutcomes(outcome);
		const product = this.productOfArr(inverseOutcomes);
	
		const newOutcomeBalance = this.invariant / product;
		const toReturn = this.outcomesToInventory[outcome] - newOutcomeBalance;
		this.outcomesToInventory[outcome] = newOutcomeBalance;
	
		return toReturn;
	}
}

