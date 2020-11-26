import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="UBCの図書館" />
    <h1>UBCの図書館</h1>
    <p>UBCにたくさん図書館があります。でも、どんなところがいいですか？この記事は私の好きな図書館を説明します。</p>

    <p><b>1. ウッドワード(Woodward)図書館</b><br/>
    ウッドワードは机が多いし普通なら随分静かだし私の一番好きな図書館です。1階にプリンタやフロントやピアノなどがあります。ピアノを弾ったらフロントにヘッドフォンを貸してもらいます。他の物を手伝ってもらいったら、フロントおも聞いてください。「NEST」の近くにありますから、腹が減ったら食べに行けます。<br/><br/>

    <b>ウッドワードのクセ</b>
    <ul>
      <li>1階に机しかありませんから、2階に行ってください。</li>
      <li>プリンタは1台しかあります。</li>
      <li>たまに誰かが普通の階段と思っているから、非常口を開けてアラームが鳴ってなることがあります。それなのに出なくてもいいです。でも気を付けてください。本物のアラームかもしれません。</li>
    </ul>
    </p>

    <p><b>2. IKB図書館</b><br/>
    IKBはUBCの真ん中にあります。大きい時計塔のとなりです。
    </p>

    <p><b>3. コーナー(Koerner)図書館</b><br/>

    </p>

    <p>ジョルダン・コイル<br/>86504727</p>


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
