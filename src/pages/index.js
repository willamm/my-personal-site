import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import * as React from "react"
import HitCounter from "../components/HitCounter"
import JSONbuildtime from "./json-at-buildtime"

const IndexPage = ({location}) => {
  return (
    <Layout pageTitle="Home Page">
      <JSONbuildtime></JSONbuildtime>
      <HitCounter slug={location.pathname} />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
