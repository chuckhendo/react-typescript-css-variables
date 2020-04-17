import styled from 'styled-components';
import declareCSSVariable from '../css-variables/declare-css-variable';
import CSSVariable from '../css-variables/css-variable';

const Button = styled('button')`
  ${declareCSSVariable('backgroundRedness', {
    transform: (val) => `rgba(${val}, 0, 0, 1);`,
  })};
  ${declareCSSVariable('textColor', { default: CSSVariable('colors-text') })};
  ${declareCSSVariable('size', { transform: (val) => `${val}rem` })};

  background: ${CSSVariable('backgroundRedness')};
  font-size: ${CSSVariable('size')};
  color: ${CSSVariable('textColor')};

  /* I know I could do this with ems, just demonstrating calcs on props */
  padding: calc(${CSSVariable('size')} / 3) calc(${CSSVariable('size')} / 2);
`;

export default Button;
