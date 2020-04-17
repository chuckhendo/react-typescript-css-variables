type PropType = string | number;

export interface declareCSSVariableOptions {
  default?: string;
  transform?: (value: PropType) => string;
}

type declareCSSVariableCallbackRequired<T, N extends string> = (
  props: T & Record<N, PropType>
) => string;
type declareCSSVariableCallbackOptional<T, N extends string> = (
  props: T & Partial<Record<N, PropType>>
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
  return (props: T & Record<N, PropType>) => {
    let value = !(name in props) && options?.default ? options.default : '';

    if (name in props) {
      value = props[name];
    }

    if (options?.transform) {
      value = options.transform(value);
    }

    return `--${name}: ${value}`;
  };
}
