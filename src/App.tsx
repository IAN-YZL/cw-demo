import React from 'react';
import styled from 'styled-components';
import Layout from './components/Layout';

const AppWrapper = styled.div`
  width: 100%;
  padding-top: 80px;
`;

function App() {
  return (
    <AppWrapper>
      <Layout />
    </AppWrapper>
  );
}

export default App;
