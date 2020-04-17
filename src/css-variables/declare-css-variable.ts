import { DefaultTheme } from 'styled-components';
import mapValues from 'lodash/mapValues';

interface HasThemeProp {
  theme: DefaultTheme;
}

type PropTypePrimitive = string | number;
type PropTypeObject = Partial<
  Record<keyof DefaultTheme['breakpoints'], PropTypePrimitive>
>;
type PropType = PropTypePrimitive | PropTypeObject;

export interface declareCSSVariableOptions {
  default?: PropType;
  transform?: (value: PropType) => string;
}

type declareCSSVariableCallbackRequired<T, N extends string> = (
  props: T & Record<N, PropType>
) => string;
type declareCSSVariableCallbackOptional<T, N extends string> = (
  props: T & Partial<Record<N, PropType>>
) => string;

export default function declareCSSVariable<
  T extends HasThemeProp,
  N extends string,
  O extends declareCSSVariableOptions
>(
  name: N,
  options: O & { default: string }
): declareCSSVariableCallbackOptional<T, N>;
export default function declareCSSVariable<
  T extends HasThemeProp,
  N extends string,
  O extends declareCSSVariableOptions
>(name: N, options?: O): declareCSSVariableCallbackRequired<T, N>;
export default function declareCSSVariable<
  T extends HasThemeProp,
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
      if (typeof value === 'object') {
        value = mapValues(value, options.transform);
      } else {
        value = options.transform(value);
      }
    }

    if (typeof value === 'object') {
      return createResponsiveCSSVariables(name, value, props.theme.breakpoints);
    }

    return `--${name}: ${value}`;
  };
}

function createResponsiveCSSVariables(
  name: string,
  value: PropTypeObject,
  breakpoints: DefaultTheme['breakpoints']
): string {
  const breakpointKeys = Object.keys(value) as Array<
    keyof DefaultTheme['breakpoints']
  >;

  return breakpointKeys
    .map((key) => {
      return `
      @media screen and (min-width: ${breakpoints[key]}) {
        --${name}: ${value[key]};
      }
    `;
    })
    .join('\n');
}
