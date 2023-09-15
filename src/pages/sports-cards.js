import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"


const SportsCards = () => (
  <Layout>
    <SEO title="Page 2" />
    <h1 class="menuHeader">Sports Cards</h1>
    <div style={{textAlign: "center", display: "flex", justifyContent: "center"}}>
      <div style={{margin: "20px"}}>Baseball</div>
      <div style={{margin: "20px"}}>Hockey</div>
      <div style={{margin: "20px"}}>Football</div>
      <div style={{margin: "20px"}}>Vintage</div>
    </div>
  </Layout>
)

export default SportsCards
