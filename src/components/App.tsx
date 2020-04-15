import React from 'react';
import styled from 'styled-components';
import Button2 from './Button2';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Button2 background="green">Test</Button2>
    </Container>
  );
};

export default App;
