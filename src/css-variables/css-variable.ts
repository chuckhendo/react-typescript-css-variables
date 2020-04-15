export default function CSSVariable<P extends {}, K extends keyof P>(key: K) {
  return (props: P) => {
    return `var(--${key})`;
  };
}
