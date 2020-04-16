import styled from 'styled-components';
import declareCSSVariable from '../css-variables/declare-css-variable';
import CSSVariable from '../css-variables/css-variable';

const Button = styled('button')`
  ${declareCSSVariable('backgroundColor')};
  ${declareCSSVariable('size')};
  ${declareCSSVariable('propWithDefault', { default: 'my default' })};

  background: ${CSSVariable('backgroundColor')};
  font-size: ${CSSVariable('size')};
`;

export default Button;
