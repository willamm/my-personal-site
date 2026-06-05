// ABOUTME: Dark mode toggle button component
// ABOUTME: Displays sun/moon icon based on current theme and toggles dark mode

import React from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../styles/ThemeProvider'

const Button = styled.button`
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.fontSize.base};
  color: var(--color-text);
  transition: background-color 0.2s ease, border-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 36px;

  &:hover {
    background-color: var(--color-surface-hover);
    border-color: var(--color-accent);
  }

  &:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`

export default function ToggleDarkMode() {
  const { isDark, toggleDarkMode } = useThemeContext()

  return (
    <Button
      onClick={toggleDarkMode}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <span aria-hidden="true">☀️</span>
      ) : (
        <span aria-hidden="true">🌙</span>
      )}
    </Button>
  )
}
