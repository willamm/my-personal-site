import * as React from 'react';
import HitCounter from '../components/HitCounter';
import Layout from '../components/layout'
import useSiteMetadata from '../hooks/useSiteMetadata';


export const Head = () => <title>About Me</title>

const AboutPage = ({location}) => {
    return (
        <Layout pageTitle="About">
            <p>This is the About Me page</p>
            <HitCounter slug={location.pathname}></HitCounter>
        </Layout>
    )
}

export default AboutPage;