import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from '@material-ui/core/styles'


const withStyles = makeStyles(() => ({
  awardsCardImage: {
    height: "400px", 
    width: "60%",
    borderRadius: "35px",
    "@media(max-width: 600px)": {
      width: "100%"
    }
  },


}));



const Awards = () => {

  const classes = withStyles();

  return (
    <Layout>
      <SEO title="Page 2" />
      <h1 class="menuHeader">Trophies, Engravings, and Awards
      </h1>
      <div style={{ textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <p>Whether it's a corporate recognition award, trophy, or engraving, we can customize and deliver to meet and exceed your expectations</p>
        <div class="awardsCardWrapper">
          <StaticImage className={classes.awardsCardImage} src="../images/4_trophy.jpg" />
          <ul style={{ textAlign: "left", width: "40%", padding: "0 25px", marginTop: "2rem" }}>
            <li>Water bottles</li>
            <br />
            <li>Weddings</li>
            <br />

            <li>Glass</li>
            <br />

            <li>Crystal</li>
            <br />

            <li>Acrylic</li>
          </ul>
        </div>

        <div class="awardsCardWrapperSecond">
          <ul style={{ textAlign: "left", width: "40%", padding: "0 25px", marginTop: "2rem" }}>
            <li>Trophies</li>
            <br />
            <li>Medals</li>
            <br />
            <li>Leather</li>
            <br />
            <li>Book covers</li>
            <br />
            <li>Wood/Burn Signs</li>
          </ul>
          <StaticImage className={classes.awardsCardImage} src="../images/trophywall_2.jpg" />
        </div>
      </div>
    </Layout>
  )

}

export default Awards
