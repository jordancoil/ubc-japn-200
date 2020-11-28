import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="UBCの図書館" />
    <h1>UBCの図書館</h1>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/KOKuOclhA_Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p>UBCにたくさん図書館があります。でも、どんなところがいいですか？この記事は私の好きな図書館を説明します。</p>

    <p><b>1. ウッドワード(Woodward)図書館</b><br/>
    ウッドワードは机が多いし普通なら随分静かだし私の一番好きな図書館です。1階にプリンタやフロントやピアノなどがあります。ピアノを弾ったらフロントにヘッドフォンを貸してもらいます。他の物を手伝ってもらいったら、フロントおも聞いてください。「NEST」の近くにありますから、腹が減ったら食べに行けます。<br/><br/>

    <div style={{ padding: `0rem 1rem` }}>
      <b>ウッドワードのクセ</b>
      <ul>
        <li>1階に机しかありませんから、2階に行ってください。</li>
        <li>プリンタは1台しかあります。</li>
        <li>たまに誰かが普通の階段と思っているから、非常口を開けてアラームが鳴ってなることがあります。それなのに出なくてもいいです。でも気を付けてください。本物のアラームかもしれません。</li>
      </ul>
    </div>
    </p>

    <p><b>2. IKB図書館</b><br/>
    IKBはUBCの真ん中にあります。大きい時計塔のとなりです。たくさんプリンタがあります。静かが欲しいければ二階に静かなスペースがあります。<br/><br/>

    <div style={{ padding: `0rem 1rem` }}>
      <b>IKBのクセ</b>
      <ul>
        <li>昼間にはIKBがいそがしいですから夕方戻てきてください。</li>
        <li>IKBの中に「Ike's Cafe」があります。食べたいときはここに来ればいい。</li>
      </ul>
    </div>

    </p>

    <p><b>3. コーナー(Koerner)図書館</b><br/>
    IKBに出てからメインモールの反対側に超えてコーナー図書館があります。1階にプリンターが2台があります。上の階はたいてい満席で静かがないだから地下の方がよく勉強すること。<br/><br/>

    <div style={{ padding: `0rem 1rem` }}>
      <b>コーナーのクセ</b>
      <ul>
        <li>地下はアウトレットがしかありませんから、勉強する前にパソコンのフルチャージといいです。</li>
        <li>外から見る目は新しい建物ですが中からちょっと古いです。</li>
      </ul>
    </div>

    </p>

    <p>ジョルダン・コイル<br/>86504727</p>


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
