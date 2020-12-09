import React, { ReactNode, useState } from 'react';
import { Row } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styled from 'styled-components';

interface CardHeaderProps {
	title: string;
	handleClick: () => void;
	visible: boolean;
}

interface InfoCardProps {
	title: string;
	children: ReactNode;

}

const HeaderWrapper = styled(Row)`
	background-color: #f1f8ee;
	justify-content: space-between;
	height: 32px;
	line-height: 32px;
	padding: 0 10px;
	
	h3 {
		font-size: 14px;
	}
`;

const CardWrapper = styled.div`
	margin-bottom: 20px;
	border: 1px solid #ececec;
`;

const CardHeader = (props: CardHeaderProps) => {
	const { title, handleClick, visible } = props;
	return (
		<HeaderWrapper>
			<h3>{title}</h3>
			<div onClick={handleClick}>
				{visible ? <UpOutlined /> : <DownOutlined />}
			</div>
		</HeaderWrapper>
	);
};


const InfoCard = (props: InfoCardProps) => {
	const [visible, setVisible] = useState(true);
	const handleClick = () => {
		setVisible(!visible);
	}

	return (
		<CardWrapper>
			<CardHeader title={props.title} handleClick={handleClick} visible={visible} />
			{visible && props.children}
		</CardWrapper>
	);
};

export default InfoCard;