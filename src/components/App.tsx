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
          backgroundRedness={{ xs: 0, sm: 75, md: 150, lg: 200, xl: 255 }}
          size="100px"
          propWithDefault="asdf"
        >
          Test
        </Button>
      </ThemeVariableProvider>
    </Container>
  );
};

export default App;
