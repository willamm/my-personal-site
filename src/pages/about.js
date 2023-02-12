import * as React from 'react';
import HitCounter from '../components/HitCounter';
import Layout from '../components/layout'
import useSiteMetadata from '../hooks/useSiteMetadata';
import JSONbuildtime from './json-at-buildtime';


export const Head = () => <title>About Me</title>

const AboutPage = ({location}) => {
    return (
        <Layout pageTitle="About">
            <p>This is the About Me page</p>
            <JSONbuildtime></JSONbuildtime>
            <JSONbuildtime></JSONbuildtime> 
            <HitCounter slug={location.pathname}></HitCounter>
        </Layout>
    )
}

export default AboutPage;