// ABOUTME: Blog listing page with preview cards for each post
// ABOUTME: Displays all MDX blog posts in a styled card grid

import { graphql } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import HitCounter from '../components/HitCounter'
import Layout from '../components/layout'

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
`

const PostCard = styled.article`
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: ${(props) => props.theme.radii.md};
  padding: ${(props) => props.theme.spacing.lg};
  transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--color-accent);
    box-shadow: ${(props) => props.theme.shadows.md};
  }
`

const PostTitle = styled.h2`
  font-size: ${(props) => props.theme.typography.fontSize.xl};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  line-height: ${(props) => props.theme.typography.lineHeight.tight};

  a {
    color: var(--color-text);
    text-decoration: none;

    &:hover {
      color: var(--color-accent);
      text-decoration: underline;
    }
  }
`

const PostExcerpt = styled.p`
  color: var(--color-text-muted);
  font-size: ${(props) => props.theme.typography.fontSize.base};
  margin-bottom: 0;
`

export const Head = () => <title>Blog</title>

export const query = graphql`
  query BlogPostSlugs {
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }
`

const BlogPage = ({ data, location }) => {
  return (
    <Layout pageTitle="Blog" location={location}>
      <p>Thoughts on software, technology, and career growth.</p>
      <PostList>
        {data.allMdx.nodes.map((post) => (
          <PostCard key={post.id}>
            <PostTitle>
              <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
            </PostTitle>
            <PostExcerpt>Read more &rarr;</PostExcerpt>
          </PostCard>
        ))}
      </PostList>
      <HitCounter slug={location.pathname} />
    </Layout>
  )
}

export default BlogPage
