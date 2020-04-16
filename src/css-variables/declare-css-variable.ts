export interface declareCSSVariableOptions {
  default?: string;
  transform?: (value: string) => string;
}

type declareCSSVariableCallbackRequired<T, N extends string> = (
  props: T & Record<N, any>
) => string;
type declareCSSVariableCallbackOptional<T, N extends string> = (
  props: T & Partial<Record<N, any>>
) => string;

export default function declareCSSVariable<
  T,
  N extends string,
  O extends declareCSSVariableOptions
>(
  name: N,
  options: O & { default: string }
): declareCSSVariableCallbackOptional<T, N>;
export default function declareCSSVariable<
  T,
  N extends string,
  O extends declareCSSVariableOptions
>(name: N, options?: O): declareCSSVariableCallbackRequired<T, N>;
export default function declareCSSVariable<
  T,
  N extends string,
  O extends declareCSSVariableOptions
>(
  name: N,
  options?: O
):
  | declareCSSVariableCallbackOptional<T, N>
  | declareCSSVariableCallbackRequired<T, N> {
  return (props: T & Record<N, any>) => {
    if (!(name in props) && !options?.default) {
      return '';
    } else if (!(name in props) && options?.default) {
      return `--${name}: ${options.default}`;
    }

    if (!(name in props) && options?.default) {
      const transformedValue = options?.transform
        ? options.transform(options.default)
        : options.default;
      return `--${name}: ${transformedValue}`;
    }

    const transformedValue = options?.transform
      ? options.transform(props[name])
      : props[name];
    return `--${name}: ${transformedValue}`;
  };
}
