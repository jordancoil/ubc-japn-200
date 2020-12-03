import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="UBCで観光に行きましょう" />
    <h1>UBCで観光に行きましょう</h1>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/6wQM_p0dDFo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <p>私はUBCの学生、 ラッセルと申します。UBCへようこそ。今から、UBCの観光地を紹介します。</p>

    <p><b>バラの庭</b><br/>
    <img src={require("../images/sights1.jpg")} />
    これはUBCのバラの庭です。バラの庭で山と海が見えますから、カメラを持って来てください。そして、七月から十一月まで色々なバラが咲きます。バラが十二種類もありますから、ぜひ見てください。
    </p>

    <p>
    庭で友達と写真を撮ったら写真はとても綺麗かもしれません。ここで結婚できますが結婚式は最大百二十人が来られますから気をつけください。バラの庭は有名から、結婚式を早く予約しておかなきゃいけません。でも、たばこをすってはいけません。バラの庭はたいてい混んでいますから朝早く行ったほうがいいかもしれません。図書館は近いから勉強してから見に来てもいいです。バラの庭は広いし、綺麗だし、ぜひ観光してください。
    </p>

    <p><b>新渡戸記念庭園</b><br/>
    <img src={require("../images/sights2.webp")} />
    新渡戸記念庭園はUBCにある日本庭園です。UBCのウエブサイトによると、新渡戸記念庭園は世界で有名な庭園だそうです。1933年に新渡戸稲造の死を記念してできました。日本のもと天皇明仁は庭園を歩いた時「私は日本にいます」と言いました。五月から十一月まで最終土曜日に日本茶道を参加できます。日本茶道はお湯を沸かし、お茶を入れる芸道です。春に桜が咲きますから六月に来たら最高の景色が見えます。お茶を飲みながら、桜を見るととても気持ちになります。静かだし、散歩すると落ち着くし、とてもいい庭園です。
    </p>

    <p>ラッセル・コホ<br/>39762869</p>


    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
