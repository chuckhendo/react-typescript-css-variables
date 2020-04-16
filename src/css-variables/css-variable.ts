import { DefaultTheme } from 'styled-components';

export default function CSSVariable<
  P extends { theme: DefaultTheme },
  K extends keyof P | keyof P['theme']['variables']
>(key: K) {
  return (props: P) => {
    return `var(--${key})`;
  };
}
