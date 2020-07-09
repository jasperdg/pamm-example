import React, { useState } from 'react';
import { FormContainer, InputContainer, Submit } from '../FormComponents';

function PurchaseShares({buyShares}) {
	const [outcome, setInternalOutcome] = useState(0);
	const [spend, setInternalSpend] = useState(10);
	
	const handleOutcomeChange = e => {
		setInternalOutcome(e.target.value);
	}

	const handleSpendChange = e => {
		setInternalSpend(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		buyShares(outcome, spend);
	}

	return(
		<FormContainer onSubmit={handleSubmit}>
			<InputContainer label="outcome" value={outcome} onChange={handleOutcomeChange}/>
			<InputContainer label="spend (dollars)" value={spend} onChange={handleSpendChange}/>
			<Submit value="Buy"/>
		</FormContainer>
	)

}

export default PurchaseShares;