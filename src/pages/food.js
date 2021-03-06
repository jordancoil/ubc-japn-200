import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="UBCのグルメ攻略" />
    <h1>UBCのグルメ攻略</h1>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/uRp3Qtzln5E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p>UBCへようこそ！いつもとは違った学び方や生活を楽しんでくださいね！UBCで食べられるお店をご紹介します。</p>

    <img src={require("../images/food1.jpg")} width={"35%"} style={{ float: `left`, marginRight: `20px` }} />
    <div style={{ display: `inline` }}>
      <p><b>1. 食堂</b><br/>

      UBCの3つの主要寮（tp,oc,pv）にはそれぞれ専用の食堂があり、新入生はUBCの学生証にお金を預けたり、3つの主要寮の食堂やキャンパス内の様々なレストランで割引を受けることができます。食堂の食事については、お腹いっぱいになれるが、美味しいとは言えませんね。
      </p>

      <p><b>2. 学内のレストラン</b><br/>
      Bento Sushi & Tim Hortons & Triple 0’s<br/>
      この3つのお店はつながっていて、Sauderの隣にあります。Bento Sushiでは、寿司、ラーメン、天ぷら、牛丼などの和食を販売しています。TimHortonsはカナダのカフェチェーンで、様々なパン、ペストリー、コーヒー、ドリンクをリーズナブルな価格で販売しており、朝食を食べる時間がない、あるいは授業の合間に軽食を食べたい学生には最適です。ただ、キャンパス全体で1店舗しかないので、行列ができていることが多いです。TripleO’sはファストフードのハンバーガーレストランで、食堂よりも安くて美味しいです。
      <br/><br/>
      Nest<br/>
      Nestビルの1階と地下1階には、食事ができる場所がたくさんあります。1階にはお寿司やミルクティー、コーヒーショップがあります。地下1階にはsoup market、butter chicken、vegetable curry、メキシコ料理などがあります。お値段もリーズナブルで美味しいです。
      </p>
    </div>


    <img src={require("../images/food2.jpg")} width={"35%"} style={{ float: `left`, marginRight: `20px` }} />
    <div style={{ display: `inline` }}>
      <p><b>3. 学校周辺のレストラン</b><br/>
      Village<br/>
      これは学校の隣にある大きなレストランセンターで、学生がよく食事をしているところです。地下1階はfood courtになっていて、マーラータン、和食、ミルクティー、中華ファーストフード、インド料理などがあります。また、地上には中華料理店も多く、より本格的で種類も多いので、学生のグループで食事をするのにも適しています。
      <br/><br/>
      Wesbrook<br/>
      Wesbrookには、中華料理店である「洪​师​傅牛肉麺店」と「​凤鸣​粥店」の店舗が２軒あります。​凤鸣​粥店では美味しいお粥を提供しており、香港風の料理も提供しています。wesbrookはキャンパスからかなり離れているので、寮に住んでいる交換留学生は、70番か41番のバスでwesbrookまで行くことができます。
      </p>
    </div>

    <p>クレア・チョウ<br/>81703829</p>


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
