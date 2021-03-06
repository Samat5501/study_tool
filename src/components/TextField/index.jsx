import React from 'react'
import styled from 'styled-components'

import { Input } from 'antd'
import './TextField.css'

export const Label = styled.label`
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 12%;
	color: #565a65;
	margin-bottom: 8px;
`

export const CustomInput = styled(Input)`
	border-bottom: 1px solid #b6bfd9;
	margin: 6px 0;
	border-top: 30px;
	border-right: 0;
	border-left: 0;
	width: 250px;
	height: 50px;
	border-radius: 0px;
	text-align: center;

	&:focus {
		box-shadow: none;
		padding: 0;
	}
	&::placeholder {
		font-family: 'Open Sans';
		font-size: 26px;
		line-height: 150%;
		color: #dadfeb;
	}
`
export const TextField = ({ label, type, placeholder, value, onChange, name }) => {
	return (
		<div className='textfield'>
			<Label htmlFor='Your Name'>{label}</Label>
			<CustomInput allowClear  type={type} name={name} id='' placeholder={placeholder} value={value} onChange={onChange}/>
		</div>
	)
}
