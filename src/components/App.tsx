import React from 'react';
import styled from 'styled-components';
import Button from './Button';

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
      <Button backgroundColor="blue" size="100px" propWithDefault="asdf">
        Test
      </Button>
    </Container>
  );
};

export default App;
