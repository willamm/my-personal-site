// ABOUTME: MDX blog post template with themed component overrides
// ABOUTME: Renders individual blog posts with unified styling and hit counter

import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../components/layout'
import HitCounter from '../components/HitCounter'
import { MDXComponents } from '../components/MDXComponents'

export default function PageTemplate({ data, children, location }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title} location={location}>
      <MDXProvider components={MDXComponents}>
        {children}
      </MDXProvider>
      <HitCounter slug={data.mdx.frontmatter.slug} />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
      }
    }
  }
`
