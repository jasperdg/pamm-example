import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const InputSection = styled.div``;
const Label = styled.label``;
const InputField = styled.input``;
const Inventory = styled.div`
	margin-bottom: 15px;
`;
const ShareInInventory = styled.div``;
const Invariant = styled.p`
`
const BuySection = styled.form`
`
const BuyButton = styled.input``

function MarketTemplate({calcInvariant}) {
	const [spend, setSpend] = useState(0);
	const [outcomes, setOutcomes] = useState(2);
	const [funding, setFunding] = useState(10);
	const initialShareInventory = [];
	for (var i = 0; i < outcomes; i++) {
		initialShareInventory.push(funding);
	}
	const [shareInventory, setShareInventory] = useState(initialShareInventory)
	const expectedInvariant = calcInvariant(initialShareInventory);
	const [invariant, setInvariant] = useState(expectedInvariant);

	const handleOutcomeChange = e => {
		setOutcomes(e.target.value);
	}

	const handleFundingChange = e => {
		setFunding(e.target.value);
	}

	const handleSpendChange = e => {
		setSpend(e.target.value);
	}

	const handleBuy = e => {
		e.preventDefault();
		setShareInventory(shareInventory.map(inv => parseInt(inv) + parseInt(spend)))
	}

	const sharesInInventory = shareInventory.map((shares, i) => (
		<ShareInInventory key={i}>outcome: {i} - {shares} shares</ShareInInventory>
	))

	console.log(sharesInInventory)
	return(
		<Container>
			<Invariant>Invariant: {invariant}</Invariant>

			<Inventory>
				<h3>Inventory</h3>
				{sharesInInventory}
			</Inventory>

			<InputSection>
				<Label>Number of market outcomes: </Label>
				<InputField value={outcomes} onChange={handleOutcomeChange}/>
			</InputSection>
			<InputSection>
				<Label>Initial liquidity provided: $</Label>
				<InputField value={funding} onChange={handleFundingChange}/>
			</InputSection>

			<BuySection onSubmit={handleBuy}>
				<Label>Buy shares: </Label>
				<InputField value={spend} onChange={handleSpendChange}/>
				<BuyButton type="submit" value="buy"/>
			</BuySection>
		</Container>
	)

}

export default MarketTemplate;