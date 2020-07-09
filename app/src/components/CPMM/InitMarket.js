import React, { useState } from 'react';
import { FormContainer, InputContainer, Submit } from '../FormComponents';

function InitMarket({setMarketMakerInstance}) {
	const [outcomes, setInternalOutcomes] = useState("2");
	const [funding, setInternalFunding] = useState("10");
	
	const handleOutcomesChange = e => {
		setInternalOutcomes(e.target.value);
	}

	const handleFundingChange = e => {
		setInternalFunding(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		setMarketMakerInstance({outcomes, funding});
	}

	return(
		<FormContainer onSubmit={handleSubmit}>
			<InputContainer label="outcomes (min = 2)" value={outcomes} onChange={handleOutcomesChange}/>
			<InputContainer label="funding (dollars)" value={funding} onChange={handleFundingChange}/>
			<Submit value="Update"/>
		</FormContainer>
	)

}

export default InitMarket;