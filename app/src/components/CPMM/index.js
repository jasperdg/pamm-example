import React, { useState } from 'react';
import InitMarket from './InitMarket';
import MarketData from '../MarketData';
import UserData from '../UserData';
import PurchaseShares from './PurchaseShares';

import ConstantProductMarketMaker from "../../utils/ConstantProductMarketMaker";
function CPMM() {
	const [marketMakerData, setMarketMakerData] = useState();
	const [marketMakerInstance, setMarketMakerInstance] = useState();

	const verifyThenSetMakerInstance = (marketMakerInstance) => {
		if (!marketMakerInstance.outcomes || !marketMakerInstance.funding || parseInt(marketMakerInstance.outcomes) < 2 || parseInt(marketMakerInstance.funding) < 1) {
			return
		} 
		let instance = new ConstantProductMarketMaker(marketMakerInstance.outcomes, marketMakerInstance.funding);
		setMarketMakerInstance(instance);
		setMarketMakerData({...instance});
	}

	const buyShares = (outcome, spend) => {
		marketMakerInstance.buyShares(outcome, spend);
		setMarketMakerData({...marketMakerInstance});
	}

	return(
		<>
			<MarketData data={marketMakerData} />
			<UserData data={marketMakerData} />
			<InitMarket setMarketMakerInstance={verifyThenSetMakerInstance}/>
			{
				marketMakerInstance && <PurchaseShares buyShares={buyShares}/>
			}
		</>
	)

}

export default CPMM;