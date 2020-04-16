import styled from 'styled-components';
import declareCSSVariable from '../css-variables/declare-css-variable';
import CSSVariable from '../css-variables/css-variable';

const Button = styled('button')`
  ${declareCSSVariable('backgroundRedness', {
    transform: (val) => `rgba(${val}, 0, 0, 1);`,
  })};
  ${declareCSSVariable('size')};
  ${declareCSSVariable('propWithDefault', { default: 'my default' })};

  background: ${CSSVariable('backgroundRedness')};
  font-size: ${CSSVariable('size')};
`;

export default Button;
