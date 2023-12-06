import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography'
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from '@material-ui/core/styles'
import axios from "axios"
import "../components/main.css"

const withStyles = makeStyles(() => ({
  someOfWorkHeader: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#a91806",
    padding: "10px",
    width: "100%",
    margin: "auto",
    "@media(max-width: 600px)": {
      width: "90%"
    }
  },
  newArrivalImage: {
    borderRadius: "15px 0px 0 15px",
    width: "80%",
    padding: "30px",
    margin: "auto",
    "@media(max-width: 600px)": {
      borderRadius: "15px 15px 0px 0px",
      width: "100%"
    }
  },
  arrivalText: {
    color: "black",
    textAlign: "center",
    padding: "30px",
    width: "100%",
    "@media(max-width: 600px)": {
      width: "100%"
    }
  },
}));



const SportsCards = () => {

  const classes = withStyles();

  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);
  const [featured, setFeatured] = useState([]);

  const newArrivalBaseUrl = "https://btp-strapi-qxtpiid5ka-ue.a.run.app/api/cards?populate=*"

  const newArrivalObj = {};

  useEffect(() => {
    axios.get(newArrivalBaseUrl).then((res) => {
      formatData(res.data);
      setResponse(res.data);
    });
  }, [])

  const formatData = (resp) => {
    let data = resp.data;

    let dataArr = data.map(x => x.attributes.image.data);
    let formattedDataArr = dataArr.map(obj => obj.attributes.formats.small.url);

    let dataAttributes = data.map(newArrival => newArrival.attributes);

    for (let i = 0; i < dataAttributes.length; i++) {
      for (let j = 0; j < formattedDataArr.length; j++) {
        dataAttributes[i].imageUrl = formattedDataArr[i]
      }
    }

    let featuredBalls = dataAttributes.filter((ball => ball.featured === true))
    setFeatured(featuredBalls)
    // featured ordered first
    setData(dataAttributes.sort((a, b) => a.featured - b.featured));
  }


  return (
    <Layout>
      <SEO title="Cards" />
      <section class="ballPageWrapper">
        <Typography className={classes.someOfWorkHeader}>Sports Cards</Typography>
        <p style={{ textAlign: "center", marginTop: "25px", color: "white", backgroundColor: "black", padding: "20px", borderTopRightRadius: "15px", borderTopLeftRadius: "15px" }}>We are always looking to purchase, trade, and sell all types of sporting cards, <b>especially vintage (1975 & older)</b></p>
        <p style={{textAlign: "center"}}>Feel free to check out our store on<span>
          <a  href="https://www.ebay.com/str/bbuckert24" target="_blank">
          <StaticImage style={{width: "100px", objectFit: "contain", verticalAlign: "middle", marginLeft: "7px"}} src="../images/ebay_image.png" />

          </a></span></p>
        {featured ? <h2 class="featuredBallTitle">Featured Cards</h2> : null}

        <div class="featuredBallWrapper">
          {featured ? featured.map(card => (
            <>
              <div class="ballWrapper">
                <img key={card.imageUrl} className={classes.newArrivalImage} src={card.imageUrl} />
                <Typography className={classes.arrivalText}>{card.name}</Typography>
                <Typography className={classes.arrivalText}>{card.description}</Typography>
                {card.price ? <Typography className={classes.arrivalText}>${card.price}</Typography>
                  : null}
              </div>
            </>

          )) : null}
        </div>
        <h2 class="featuredBallTitle">All Cards</h2>

        <div class="newArrivalRoot">
          {data ? data.map(card => (
            <div class="ballWrapper">
              <img key={card.imageUrl} className={classes.newArrivalImage} src={card.imageUrl} />
              <Typography className={classes.arrivalText}>{card.name}</Typography>
              <Typography className={classes.arrivalText}>{card.description}</Typography>
              {card.price ? <Typography className={classes.arrivalText}>${card.price}</Typography>
                : null}
            </div>
          )) : null}
        </div>
      </section>
    </Layout>
  )
}

export default SportsCards
