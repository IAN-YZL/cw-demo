import React, { CSSProperties, ReactNode } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const BtnLayout = styled(Button)`
	background-color: #56ad31;
	border-radius: 3px;
	color: #ffffff;
	border: none;
	outline: none;
	padding: 2px 8px;
	font-size: 10px;
	font-weight: 500;
	margin-right: 10px;
	height: 25px;
`;

interface HeaderButtonProps {
	icon: ReactNode;
	text: string;
	style?: CSSProperties;
}

const HeaderButton = (props: HeaderButtonProps) => {

	return (
		<BtnLayout icon={props.icon} style={props.style}>
			{props.text}
		</BtnLayout>
	);
};

export default HeaderButton;
