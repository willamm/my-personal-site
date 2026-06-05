// ABOUTME: Global CSS reset and base element styles using styled-components
// ABOUTME: Uses CSS custom properties for instant theme switching without flash

import { createGlobalStyle } from 'styled-components'
import { darkTheme } from './theme'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    --color-bg: ${(props) => props.theme.colors.bg};
    --color-surface: ${(props) => props.theme.colors.surface};
    --color-surface-hover: ${(props) => props.theme.colors.surfaceHover};
    --color-text: ${(props) => props.theme.colors.text};
    --color-text-muted: ${(props) => props.theme.colors.textMuted};
    --color-accent: ${(props) => props.theme.colors.accent};
    --color-accent-hover: ${(props) => props.theme.colors.accentHover};
    --color-border: ${(props) => props.theme.colors.border};
    --color-selection-bg: ${(props) => props.theme.colors.selectionBg};
    --color-selection-text: ${(props) => props.theme.colors.selectionText};
  }

  html[data-theme="dark"] {
    --color-bg: ${darkTheme.colors.bg};
    --color-surface: ${darkTheme.colors.surface};
    --color-surface-hover: ${darkTheme.colors.surfaceHover};
    --color-text: ${darkTheme.colors.text};
    --color-text-muted: ${darkTheme.colors.textMuted};
    --color-accent: ${darkTheme.colors.accent};
    --color-accent-hover: ${darkTheme.colors.accentHover};
    --color-border: ${darkTheme.colors.border};
    --color-selection-bg: ${darkTheme.colors.selectionBg};
    --color-selection-text: ${darkTheme.colors.selectionText};
  }

  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.fontSize.base};
    line-height: ${(props) => props.theme.typography.lineHeight.relaxed};
    color: var(--color-text);
    background-color: var(--color-bg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  ::selection {
    background-color: var(--color-selection-bg);
    color: var(--color-selection-text);
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: ${(props) => props.theme.typography.lineHeight.tight};
    font-weight: 700;
    margin-bottom: ${(props) => props.theme.spacing.md};
    color: var(--color-text);
  }

  h1 { font-size: ${(props) => props.theme.typography.fontSize['4xl']}; }
  h2 { font-size: ${(props) => props.theme.typography.fontSize['3xl']}; }
  h3 { font-size: ${(props) => props.theme.typography.fontSize['2xl']}; }
  h4 { font-size: ${(props) => props.theme.typography.fontSize.xl}; }

  p {
    margin-bottom: ${(props) => props.theme.spacing.md};
    max-width: 65ch;
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.15s ease;
  }

  a:hover {
    color: var(--color-accent-hover);
    text-decoration: underline;
  }

  code {
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
    font-size: 0.9em;
    padding: 0.15em 0.4em;
    background-color: var(--color-surface);
    border-radius: ${(props) => props.theme.radii.sm};
    color: var(--color-accent);
  }

  pre {
    background-color: var(--color-surface);
    padding: ${(props) => props.theme.spacing.lg};
    border-radius: ${(props) => props.theme.radii.md};
    overflow-x: auto;
    margin-bottom: ${(props) => props.theme.spacing.lg};
    border: 1px solid var(--color-border);
  }

  pre code {
    background: none;
    padding: 0;
    color: var(--color-text);
  }

  blockquote {
    border-left: 4px solid var(--color-accent);
    padding-left: ${(props) => props.theme.spacing.lg};
    margin-left: 0;
    margin-bottom: ${(props) => props.theme.spacing.lg};
    color: var(--color-text-muted);
    font-style: italic;
  }

  hr {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: ${(props) => props.theme.spacing.xl} 0;
  }

  ul, ol {
    margin-bottom: ${(props) => props.theme.spacing.md};
    padding-left: ${(props) => props.theme.spacing.lg};
  }

  li {
    margin-bottom: ${(props) => props.theme.spacing.sm};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: ${(props) => props.theme.spacing.lg};
  }

  th, td {
    padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
    border: 1px solid var(--color-border);
    text-align: left;
  }

  th {
    font-weight: 600;
    background-color: var(--color-surface);
  }
`
