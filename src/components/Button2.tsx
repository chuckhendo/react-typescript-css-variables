import styled from 'styled-components';

function CSSVariable<T>(name: keyof T): (props: T) => string {
  return (props: T) => {
    return `--${name}: ${props[name]}`;
  };
}

interface Props {
  background: string;
}

const Button2 = styled('button')<Props>`
  ${CSSVariable<Props>('background')};
  background: var(--background);
`;

export default Button2;
