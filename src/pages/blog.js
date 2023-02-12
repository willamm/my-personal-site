import { graphql } from 'gatsby';
import * as React from 'react';
import HitCounter from '../components/HitCounter';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export const Head = () => <title>Blog</title>

export const query = graphql`
    query BlogPostSlugs {
        allMdx {
            nodes {
                frontmatter {
                    slug
                    title
                }
            }
        }
    }
`
const BlogPage = ({data, location}) => {
    return (
        <Layout pageTitle="Blog">
            <p>This is the blog page. Blog posts go here.</p>
            <div>
                {data.allMdx.nodes.map((post) => {
                    return <li key={post.id}><Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link></li>
                })}
            </div>
            <HitCounter slug={location.pathname} />
        </Layout>
    )
}

export default BlogPage;