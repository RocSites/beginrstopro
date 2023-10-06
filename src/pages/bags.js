import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import { StaticImage } from "gatsby-plugin-image"



const Bags = () => (
  <Layout>
    <SEO title="Page 2" />
    <h1 class="menuHeader">Bags</h1>
    <div style={{textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <p>We offer top-quality Single, Double, and Triple Roller & Carry bags. <br/><br/>Prices start at $59.00</p>
        <StaticImage style={{height: "500px"}} src="../images/bagwall_shoe_2.jpg" />
    </div>
  </Layout>
)

export default Bags
