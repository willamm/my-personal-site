// ABOUTME: Shared layout wrapper with styled-components, dark mode, and navigation
// ABOUTME: Provides consistent page shell, nav bar, and theme switching for all pages

import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ThemeProvider } from '../styles/ThemeProvider'
import { GlobalStyle } from '../styles/GlobalStyle'
import ToggleDarkMode from './ToggleDarkMode'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  padding: ${(props) => props.theme.spacing.lg};
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 720px;
`

const Nav = styled.nav`
  margin-bottom: ${(props) => props.theme.spacing.xl};
`

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
`

const NavItem = styled.li`
  display: flex;
  align-items: center;
`

const NavLink = styled(Link)`
  color: var(--color-text);
  font-weight: 500;
  font-size: ${(props) => props.theme.typography.fontSize.base};
  text-decoration: none;
  padding: ${(props) => props.theme.spacing.sm} 0;
  border-bottom: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: var(--color-accent);
    text-decoration: none;
    border-bottom-color: var(--color-accent);
  }

  &[aria-current="page"] {
    color: var(--color-accent);
    border-bottom-color: var(--color-accent);
  }
`

const ExternalNavLink = styled.a`
  color: var(--color-text);
  font-weight: 500;
  font-size: ${(props) => props.theme.typography.fontSize.base};
  text-decoration: none;
  padding: ${(props) => props.theme.spacing.sm} 0;
  border-bottom: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: var(--color-accent);
    text-decoration: none;
    border-bottom-color: var(--color-accent);
  }
`

const Main = styled.main`
  width: 100%;
`

const PageHeading = styled.h1`
  font-size: ${(props) => props.theme.typography.fontSize['3xl']};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  color: var(--color-accent);
`

const Layout = ({ pageTitle, children, location }) => {
  const resumeUrl =
    'https://docs.google.com/document/d/e/2PACX-1vRg9ZTIo6cTKuXx342YACpauM68GIN2EMEphhUc3xUKnzZw8VGZAuokDOfp61BAWRaSHLs9cKUYyENr/pub'

  return (
    <ThemeProvider>
      <GlobalStyle />
      <PageWrapper>
        <ContentContainer>
          <Nav>
            <NavList>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <ExternalNavLink
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </ExternalNavLink>
              </NavItem>
              <NavItem>
                <ToggleDarkMode />
              </NavItem>
            </NavList>
          </Nav>
          <Main>
            <PageHeading>{pageTitle}</PageHeading>
            {children}
          </Main>
        </ContentContainer>
      </PageWrapper>
    </ThemeProvider>
  )
}

export default Layout
