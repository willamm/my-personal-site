// ABOUTME: Styled MDX component mappings for blog post content
// ABOUTME: Ensures all rendered MDX elements match the unified site theme

import { Link } from 'gatsby'
import styled from 'styled-components'

export const MDXComponents = {
  h2: styled.h2`
    font-size: ${(props) => props.theme.typography.fontSize['3xl']};
    margin-top: ${(props) => props.theme.spacing['2xl']};
    margin-bottom: ${(props) => props.theme.spacing.md};
    line-height: ${(props) => props.theme.typography.lineHeight.tight};
  `,
  h3: styled.h3`
    font-size: ${(props) => props.theme.typography.fontSize['2xl']};
    margin-top: ${(props) => props.theme.spacing.xl};
    margin-bottom: ${(props) => props.theme.spacing.md};
    line-height: ${(props) => props.theme.typography.lineHeight.tight};
  `,
  p: styled.p`
    margin-bottom: ${(props) => props.theme.spacing.md};
    line-height: ${(props) => props.theme.typography.lineHeight.relaxed};
    max-width: 65ch;
  `,
  a: styled.a`
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      color: var(--color-accent-hover);
    }
  `,
  ul: styled.ul`
    margin-bottom: ${(props) => props.theme.spacing.md};
    padding-left: ${(props) => props.theme.spacing.lg};
  `,
  ol: styled.ol`
    margin-bottom: ${(props) => props.theme.spacing.md};
    padding-left: ${(props) => props.theme.spacing.lg};
  `,
  li: styled.li`
    margin-bottom: ${(props) => props.theme.spacing.sm};
    line-height: ${(props) => props.theme.typography.lineHeight.relaxed};
  `,
  blockquote: styled.blockquote`
    border-left: 4px solid var(--color-accent);
    padding-left: ${(props) => props.theme.spacing.lg};
    margin-left: 0;
    margin-bottom: ${(props) => props.theme.spacing.lg};
    color: var(--color-text-muted);
    font-style: italic;
  `,
  hr: styled.hr`
    border: none;
    border-top: 1px solid var(--color-border);
    margin: ${(props) => props.theme.spacing.xl} 0;
  `,
  table: styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: ${(props) => props.theme.spacing.lg};
    border: 1px solid var(--color-border);
    border-radius: ${(props) => props.theme.radii.md};
    overflow: hidden;
  `,
  th: styled.th`
    padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
    border-bottom: 1px solid var(--color-border);
    text-align: left;
    font-weight: 600;
    background-color: var(--color-surface);
  `,
  td: styled.td`
    padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
    border-bottom: 1px solid var(--color-border);
    text-align: left;
  `,
  img: styled.img`
    max-width: 100%;
    height: auto;
    border-radius: ${(props) => props.theme.radii.md};
    display: block;
    margin-bottom: ${(props) => props.theme.spacing.md};
  `,
  Link,
}
