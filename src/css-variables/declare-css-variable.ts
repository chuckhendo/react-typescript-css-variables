import { DefaultTheme } from 'styled-components';
import mapValues from 'lodash/mapValues';

interface HasThemeProp {
  theme: DefaultTheme;
}

type PropTypePrimitive = string | number;
type PropTypeFunction<T> = (props: T) => string;
type PropTypeObject = Partial<
  Record<
    keyof DefaultTheme['breakpoints'],
    PropTypePrimitive | PropTypeFunction<HasThemeProp>
  >
>;
type PropType<T extends {}> =
  | PropTypePrimitive
  | PropTypeObject
  | PropTypeFunction<T>;

export interface declareCSSVariableOptions<T extends {}> {
  default?: PropType<T>;
  transform?: (value: PropType<T>) => string;
}

type declareCSSVariableCallbackRequired<T, N extends string> = (
  props: T & Record<N, PropType<T>>
) => string;
type declareCSSVariableCallbackOptional<T, N extends string> = (
  props: T & Partial<Record<N, PropType<T>>>
) => string;

export default function declareCSSVariable<
  T extends HasThemeProp,
  N extends string,
  O extends declareCSSVariableOptions<T>
>(
  name: N,
  options: O & { default: string }
): declareCSSVariableCallbackOptional<T, N>;
export default function declareCSSVariable<
  T extends HasThemeProp,
  N extends string,
  O extends declareCSSVariableOptions<T>
>(name: N, options?: O): declareCSSVariableCallbackRequired<T, N>;
export default function declareCSSVariable<
  T extends HasThemeProp,
  N extends string,
  O extends declareCSSVariableOptions<T>
>(
  name: N,
  options?: O
):
  | declareCSSVariableCallbackOptional<T, N>
  | declareCSSVariableCallbackRequired<T, N> {
  return (props: T & Record<N, PropType<T>>) => {
    let value = !(name in props) && options?.default ? options.default : '';

    if (name in props) {
      value = props[name];
    }

    if (typeof value === 'object') {
      value = mapValues(value, (val) => {
        if (typeof val === 'function') {
          return val(props);
        }
        return val;
      });
    }

    if (options?.transform) {
      if (typeof value === 'object') {
        value = mapValues(value, options.transform);
      } else {
        value = options.transform(value);
      }
    }

    if (typeof value === 'function') {
      value = value(props);
    }

    if (typeof value === 'object') {
      console.log(value);
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
