import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import * as React from "react"
import { useEffect, useState } from "react"
import { useCallback } from "react"
import HitCounter from "../components/HitCounter"

const IndexPage = ({location}) => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial</p>
      <HitCounter slug={location.pathname} />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
