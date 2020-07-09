import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.form``
const InputSection = styled.div``
const Input = styled.input``
const SubmitButton = styled.input``
const Label = styled.label``

export const FormContainer = ({children, onSubmit}) => (
	<Container onSubmit={onSubmit}>
		{children}
	</Container>
)

export const InputContainer = ({value, onChange, label}) => (
	<InputSection>
		<Label>{label}</Label>
		<Input type="number" value={value} onChange={onChange}/>
	</InputSection>
)

export const Submit = ({value}) => <Input type="submit" value={value}/>
