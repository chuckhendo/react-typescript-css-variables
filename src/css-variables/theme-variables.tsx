import React from 'react';
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';

const ThemeVariables = createGlobalStyle`
  :root {
    ${(p) =>
      (Object.keys(p.theme.variables) as Array<keyof DefaultTheme['variables']>)
        .map((key) => `--${key}: ${p.theme.variables[key]};`)
        .join('\n')}
  }
`;

const ThemeVariableProvider: React.FC<{ theme: DefaultTheme }> = function ({
  theme,
  children,
}) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeVariables theme={theme} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeVariableProvider;
