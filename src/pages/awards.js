import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import { StaticImage } from "gatsby-plugin-image"



const Awards = () => (
  <Layout>
    <SEO title="Page 2" />
    <h1 class="menuHeader">Trophies, Engravings, and Awards
</h1>
    <div style={{textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <p>Whether it's a corporate recognition award, trophy, or engraving, we can customize and deliver to meet and exceed your expectations</p>
        <StaticImage style={{height: "500px"}} src="../images/trophywall_2.jpg" />
    </div>
  </Layout>
)

export default Awards
