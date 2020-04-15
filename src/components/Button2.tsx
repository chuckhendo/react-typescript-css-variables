import styled from 'styled-components';

interface CSSVariableOptions {
  default?: string;
}

type CSSVariableCallbackRequired<T, N extends string> = (
  props: T & Record<N, any>
) => string;
type CSSVariableCallbackOptional<T, N extends string> = (
  props: T & Partial<Record<N, any>>
) => string;

function CSSVariable<T, N extends string, O extends CSSVariableOptions>(
  name: N,
  options: O & { default: string }
): CSSVariableCallbackOptional<T, N>;
function CSSVariable<T, N extends string, O extends CSSVariableOptions>(
  name: N,
  options?: O
): CSSVariableCallbackRequired<T, N>;
function CSSVariable<T, N extends string, O extends CSSVariableOptions>(
  name: N,
  options?: O
): CSSVariableCallbackOptional<T, N> | CSSVariableCallbackRequired<T, N> {
  return (props: T & Record<N, any>) => {
    if (!(name in props) && !options?.default) {
      return '';
    } else if (!(name in props) && options?.default) {
      return `--${name}: ${options.default}`;
    }
    return `--${name}: ${props[name]}`;
  };
}

const Button2 = styled('button')`
  ${CSSVariable('background', { default: 'red' })};
  ${CSSVariable('size')};
  ${CSSVariable('propWithDefault', { default: 'my default' })};
  background: var(--background);
  font-size: var(--size);
`;

export default Button2;
