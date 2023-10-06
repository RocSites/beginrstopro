import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import { StaticImage } from "gatsby-plugin-image"



const Coaching = () => (
    <Layout>
        <SEO title="Page 2" />
        <h1 class="menuHeader">Coaching</h1>
        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <p>Whether you're new to the sport or have been playing for years, our team of professionals can help you level up!</p>
            <StaticImage src="../images/coaching_2.jpeg" />
            <h2 style={{ margin: "50px" }}>Featuring Bowler ID</h2>
            <p>There are 3 main factors that when combined correctly, will most likely result in bowling success. The lane conditions, ball performance and the bowlers execution. The first two are easily quantified, but the last has been more difficult. Determining the bowlers metrics (the influences the bowler imparts through the release of the ball) have been at best, an inaccurate science. Pro shops have had to rely on videography and perception trying to determine those bowler's influences. Essentially, it's a guess at best, UNTIL NOW.</p>
            <a href="https://www.proedgebowling.com/bowlers-id" target="_blank">
                <StaticImage src="../images/bowling_id.webp" />

            </a>
        </div>
    </Layout>
)

export default Coaching
