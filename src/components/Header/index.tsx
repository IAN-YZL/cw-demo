import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import HeaderButton from './HeaderButton';
import { ArrowLeftOutlined } from '@ant-design/icons';
import HeaderText from './HeaderText';
import OperationSet from './OperationSet';

const HeaderWrapper = styled(Row)`
	width: 100%;
	height: 40px;
	background-color: #389e0d;
`;

const Header = () => {

	return (
		<HeaderWrapper align='middle'>
			<Col span={3}>
				<HeaderButton icon={<ArrowLeftOutlined />} text='BACK' style={{ marginLeft: '30px' }} />
			</Col>
			<Col span={15}>
				<HeaderText />
			</Col>
			<Col span={6}>
				<OperationSet />
			</Col>
		</HeaderWrapper>
	);
};

export default Header;