import React from 'react';
import styled from 'styled-components';
import OutcomeList from './OutcomeList';

const MarketDataContainer = styled.div``
const DataSection = styled.div``
const Entry = styled.p``

const MarketData = ({data}) => {
	return(<MarketDataContainer>
		{
			data && (
				<DataSection>
					<Entry>outcomes: {data.outcomes}</Entry>
					<Entry>funding: {data.funding}</Entry>
					<Entry>Invariant: {data.invariant}</Entry>
					<OutcomeList metric="Balance" balanceArr={data.outcomesToInventory}/>
					<OutcomeList metric="Price" balanceArr={data.outcomesToOddsEstimates}/>
				</DataSection>
			)
		}
	</MarketDataContainer>)
}



export default MarketData;