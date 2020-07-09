import React from 'react';
import styled from 'styled-components';

const BalanceContainer = styled.div``
const Balance = styled.p``

const OutcomeList = ({metric, balanceArr}) => {

	const balances = balanceArr.map((inventory, outcome) => (
		<Balance key={outcome}>{metric} for outcome {outcome}: {inventory}</Balance>
	));

	return (
		<BalanceContainer>
			{balances}
		</BalanceContainer>
	)

}

export default OutcomeList