// ABOUTME: 404 not found page using the shared Layout component
// ABOUTME: Provides a styled, consistent error page matching the rest of the site

import * as React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page Not Found">
      <p>Sorry, we could not find what you were looking for.</p>
      {process.env.NODE_ENV === 'development' ? (
        <p>
          Try creating a page in <code>src/pages/</code>.
        </p>
      ) : null}
      <p>
        <a href="/">Go home</a>.
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
