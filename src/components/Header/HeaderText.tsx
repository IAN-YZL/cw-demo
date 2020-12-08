import React from 'react';
// import { Divider } from 'antd';
import styled from 'styled-components';

const Divider = styled.div`
	position: relative;
	height: 30px;
	width: 2px;
	margin: 0 5px;
	top: 5px;
	color: #ffffff;
`;

const TextWrapper = styled.div`
	color: #ffffff;
	font-size: 12px;
	display: flex;

	p {
		margin: 0;
		line-height: 40px;
	}
`;

const HeaderText = () => {

	return (
		<TextWrapper>
			<p>NRO09328412</p>
			<Divider />
			<p>Completed</p>
		</TextWrapper>

	);
};

export default HeaderText;