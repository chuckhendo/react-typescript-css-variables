import styled from 'styled-components';

function CSSVariable<T, N extends string>(name: N) {
  return (props: T & Record<N, any>) => {
    return `--${name}: ${props[name]}`;
  };
}

const Button2 = styled('button')`
  ${CSSVariable('background')};
  ${CSSVariable('size')};
  background: var(--background);
  font-size: var(--size);
`;

export default Button2;
