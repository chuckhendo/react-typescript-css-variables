import styled from 'styled-components';
import declareCSSVariable from '../css-variables/declare-css-variable';
import CSSVariable from '../css-variables/css-variable';

const Button = styled('button')`
  ${declareCSSVariable('background')};
  ${declareCSSVariable('size')};
  ${declareCSSVariable('propWithDefault', { default: 'my default' })};

  background: ${CSSVariable('background')};
  font-size: ${CSSVariable('size')};
`;

export default Button;
