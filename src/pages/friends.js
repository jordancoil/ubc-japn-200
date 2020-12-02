import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="title" />
    <h1>title</h1>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/G7Qv8CT2Lyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p></p>

    <p>name<br/>ubcid</p>


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
