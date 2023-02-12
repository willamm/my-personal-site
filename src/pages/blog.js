import * as React from 'react';
import HitCounter from '../components/HitCounter';
import Layout from '../components/layout';

export const Head = () => <title>Blog</title>

const BlogPage = ({location}) => {
    return (
        <Layout pageTitle="Blog">
            <p>This is the blog page. Blog posts go here.</p>
            <HitCounter slug={location.pathname} />
        </Layout>
    )
}

export default BlogPage;