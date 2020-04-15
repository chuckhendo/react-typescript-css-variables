import styled from 'styled-components';

export default function modStyled<
  T extends Record<string, string>,
  C extends keyof JSX.IntrinsicElements
>(el: C, variables: T) {
  return (strings: TemplateStringsArray, ...values: any) => {
    return styled(el)<Partial<Record<keyof T, string>>>`
      ${(p) => {
        return Object.keys(variables)
          .map((key) => {
            return `--${key}: ${p[key] ?? variables[key]};`;
          })
          .join('\n');
      }}

      ${strings
        .map((string, i) => {
          if (i < values.length) {
            return `${string}${values[i]}`;
          }

          return string;
        })
        .join('')}
    `;
  };
}
