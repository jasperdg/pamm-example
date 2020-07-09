import React from 'react';
import styled from 'styled-components';
import OutcomeList from './OutcomeList';

const UserDataContainer = styled.div``
const DataSection = styled.div``
const Entry = styled.p``

const UserData = ({data}) => {
	return(<UserDataContainer>
		{
			data && <DataSection>
				<OutcomeList metric="User balance" balanceArr={data.outcomesToUserBalance}/>
			</DataSection>
		}
	</UserDataContainer>)
}



export default UserData;