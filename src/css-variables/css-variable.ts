import kebabCase from 'lodash/kebabCase';

export default function CSSVariable<P extends {}, K extends keyof P & string>(
  key: K
) {
  return (props: P) => {
    return `var(--${kebabCase(key)})`;
  };
}
