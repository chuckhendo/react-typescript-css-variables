# Styled Components CSS variable helpers

Helper functions for using CSS variables in styled-components with Typescript

## Project Structure
- src/App: Contains a "sample" application and theme
- src/css-variables: Contains the helper functions

## Usage
- A theme is already available at src/App/theme.ts. At a minimum, a theme must include a key for variables and a key for breakpoints. If using typescript, the declare module snippet for DefaultTheme must also be present
- The App must be wrapped in a ThemeVariableProvider component. And example can be viewed at src/App/index.tsx. This wrapper creates the :root variables from the theme and adds them as a global style. It also passes the theme to styled-component's ThemeProvider
- Inside the component: when creating a new component, there are two methods you can use. An example of all of this is available at src/App/Button.tsx
  - `declareCSSVariable` - this function declares a variable and makes it available as a prop. For example, if you use `declareCSSVariable('backgroundColor')`, it would output `--backgroundColor: [value from prop]`. There are also options available which can be passed in an object as the second argument:
    - default: default value if a prop isn't set. If this key isn't present, the prop is considered required.
    - transform: a function that receives the value of the prop (or the default, or each value of a responsive object).
  - `CSSVariable` - this function outputs the result of a CSSVariable after all transforms are completed. Receives a single argument, which is the name of the previously declared variable OR a theme variable.
- On the component itself, prop values for declared CSS variables can be strings, numbers, the CSSVariable helper, or a responsive object. The responsive object is typed to be the same as the breakpoints property in the theme. Not all breakpoints are required, and any valid prop value can also be set. All of the following are valid:
  - `{ sm: 300, md: 400 lg: 500 }`
  - `{ small: CSSVariable('color-primary'), medium: '100px', large: '300px' }`
