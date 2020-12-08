import React from 'react';
import { FormOutlined, PlusCircleOutlined, SaveOutlined } from '@ant-design/icons';
import HeaderButton from './HeaderButton';
import styled from 'styled-components';

const SetWrapper = styled.div`
	display: flex;
	line-height: 40px;
`;

const OperationSet = () => {

	return (
		<SetWrapper>
			<HeaderButton icon={<FormOutlined />} text='ADD NOTE' />
			<HeaderButton icon={<PlusCircleOutlined />} text='CREATE' />
			<HeaderButton icon={<SaveOutlined />} text='SAVE' />
		</SetWrapper>
	);
};

export default OperationSet;