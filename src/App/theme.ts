const shared = {
  breakpoints: {
    xs: '320px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1440px',
  },
  variables: {
    'colors-tealLight': '#b8f2f5',
    'colors-teal': '#9ad7db',
    'colors-tealDark': '#66a4a8',
    'colors-grayLighter': '#eff0f0',
    'colors-grayLight': '#d9d9d9',
    'colors-gray': '#b2b2b2',
    'colors-grayDark': '#777777',
    'colors-black': '#1b1f1f',
    'colors-white': '#ffffff',
    'colors-success': '#26e8aa',
    'colors-error': '#fd1158',
    'colors-warning': '#ffc72f',
    'colors-info': '#4a91ed',
    'colors-text': 'var(--colors-black)',
    'colors-background': 'var(--colors-white)',
    'colors-primary': 'var(--colors-black)',
    'colors-secondary': 'var(--colors-tealDark)',
    'colors-muted': 'var(--colors-grayLight)',
    'fonts-serif':
      '"Noto Serif JP", Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro',
    'fonts-sansSerif':
      '"Noto Sans JP", system-ui, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial',
    'fonts-monospace':
      '"SFMono-Regular", Menlo, Consolas, Monaco, Liberation Mono, Lucida Console',
    'fontSizes-xs': '0.75rem',
    'fontSizes-sm': '0.875rem',
    'fontSizes-md': '1rem',
    'fontSizes-lg': '1.25rem',
    'fontSizes-xl': '1.50rem',
    'fontSizes-2xl': '2.25rem',
    'fontWeights-heading': 700,
    'fontWeights-body': 500,
    'letterSpacings-tightest': '-0.1em',
    'letterSpacings-tighter': '-0.05em',
    'letterSpacings-tight': '-0.025em',
    'letterSpacings-normal': 0,
    'letterSpacings-loose': '0.025em',
    'letterSpacings-looser': '0.05em',
    'letterSpacings-loosest': '0.1em',
    'lineHeights-none': 1,
    'lineHeights-tight': 1.25,
    'lineHeights-snug': 1.375,
    'lineHeights-normal': 1.5,
    'lineHeights-relaxed': 1.625,
    'lineHeights-loose': 2,
    'shadows-input': '0 8px 16px 0 rgba(27, 31, 31, 0.33)',
    'shadows-outline': '0 0 0 3px rgb(154, 215, 219, 1)',
    'space-xs': '0.25rem',
    'space-sm': '0.5rem',
    'space-md': '1rem',
    'space-lg': '2rem',
    'space-xl': '4rem',
  },
} as const;

export type ThemeInterface = typeof shared;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}

export const defaultTheme = shared;
