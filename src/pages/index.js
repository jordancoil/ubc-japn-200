import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>UBCへようこそ！</h1>
    <p>UBCについて読むのが記事をクリックしてください</p>

    <ul>
      <li>
        <Link to="/library/">UBCの図書館</Link> <br />
      </li>

      <li>
        <Link to="/food/">UBCのグルメ攻略</Link> <br />
      </li>

      <li>
        <Link to="/friends/">UBCで友だちとあそぶ</Link> <br />
      </li>
    </ul>


  </Layout>
)

export default IndexPage
