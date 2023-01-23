import * as React from 'react';
import HitCounter from '../components/HitCounter';
import Layout from '../components/layout'


export const Head = () => <title>About Me</title>

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>This is the About Me page</p>
            <HitCounter slug="/about"></HitCounter>
        </Layout>
    )
}

export default AboutPage;