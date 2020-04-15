import styled from 'styled-components';
import declareCSSVariable from '../declare-css-variable';

const Button2 = styled('button')`
  ${declareCSSVariable('background')};
  ${declareCSSVariable('size')};
  ${declareCSSVariable('propWithDefault', { default: 'my default' })};
  background: var(--background);
  font-size: var(--size);
`;

export default Button2;
