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
        <p>Corporate</p>
        <ul>Custom engravings (water bottles, weddings, leather, book covers, wood burn signs)</ul>
            <li>water bottles</li>
            <li>Weddings</li>
            <li>Glass</li>
            <li>Crystal</li>
            <li>Acrylic</li>
            <li>Leather</li>
            <li>Book covers</li>
            <li>Wood/Burn Signs</li>
        <StaticImage style={{height: "500px"}} src="../images/trophywall_2.jpg" />
    </div>
  </Layout>
)

export default Awards
