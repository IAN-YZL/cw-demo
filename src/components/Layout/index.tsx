import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const LayoutWrapper = styled.div`
	width: 1024px;
	margin: 0 auto;
	border-radius: 10px;
	overflow: hidden;
`;

const Layout = () => {

	return (
		<LayoutWrapper>
			<Header />
		</LayoutWrapper>
	);
};

export default Layout;