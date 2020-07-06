import React, { useState } from 'react';
import MarketTemplate from './MarketTemplate';

function CPMM() {
	
	const calcInvariant = (outcomesToInventory) => {
		return productOfArr(outcomesToInventory);
	}


	const productOfArr = (arr) => {
		return arr.reduce((product, val) => {
			return product * val
		})
	}

	return(
		<MarketTemplate calcInvariant={calcInvariant}/>
	)

}

export default CPMM;