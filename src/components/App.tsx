import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import ThemeVariableProvider from '../css-variables/theme-variables';
import { defaultTheme } from '../theme';

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
      <ThemeVariableProvider theme={defaultTheme}>
        <Button
          backgroundRedness={{ xs: '#f00', sm: '#0f0', xl: '#00f' }}
          size={2}
        >
          Test
        </Button>
      </ThemeVariableProvider>
    </Container>
  );
};

export default App;
