import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography'
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



const Bags = () => {

  const classes = withStyles();

  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);
  const [featured, setFeatured] = useState([]);

  const newArrivalBaseUrl = "https://strapi.b2pproshop.com/api/bags?populate=*"

  const newArrivalObj = {};

  useEffect(() => {
    axios.get(newArrivalBaseUrl).then((res) => {
      console.log(res.data)
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
      <SEO title="Bags" />
      <section class="ballPageWrapper">
        <Typography className={classes.someOfWorkHeader}>Bags</Typography>
        <p style={{ textAlign: "center", marginTop: "25px", padding: "20px", borderTopRightRadius: "15px", borderTopLeftRadius: "15px" }}>We offer top-quality Single, Double, and Triple Roller & Carry bags.</p>
        {featured ? <h2 class="featuredBallTitle">Featured Bags</h2> : null}

        <div class="featuredBallWrapper">
          {featured ? featured.map(ball => (
            <>
              {ball.link ? <a style={{ textDecoration: "none" }} href={`${ball.link}`} target="_blank">
                <div class="ballWrapper">
                  <img key={ball.imageUrl} className={classes.newArrivalImage} src={ball.imageUrl} />
                  <Typography className={classes.arrivalText}>{ball.make}{ball.model}</Typography>
                  <Typography className={classes.arrivalText}>{ball.description}</Typography>
                  {ball.price ? <Typography className={classes.arrivalText}>${ball.price}</Typography>
                    : null}
                </div>
              </a> : <div class="ballWrapper">
                <img key={ball.imageUrl} className={classes.newArrivalImage} src={ball.imageUrl} />
                <Typography className={classes.arrivalText}>{ball.make}{ball.model}</Typography>
                <Typography className={classes.arrivalText}>{ball.description}</Typography>
                {ball.price ? <Typography className={classes.arrivalText}>${ball.price}</Typography>
                  : null}
              </div>}

            </>

          )) : null}
        </div>
        <h2 class="featuredBallTitle">All Bags</h2>

        <div class="newArrivalRoot">
          {data ? data.map(bag => (
            <>
              {bag.link ? <a style={{ textDecoration: "none" }} href={`${bag.link}`} target="_blank">
                <div class="ballWrapper">
                  <img key={bag.imageUrl} className={classes.newArrivalImage} src={bag.imageUrl} />
                  <Typography className={classes.arrivalText}>{bag.make}{bag.model}</Typography>
                  <Typography className={classes.arrivalText}>{bag.description}</Typography>
                  {bag.price ? <Typography className={classes.arrivalText}>${bag.price}</Typography>
                    : null}
                </div>
              </a> : <div class="ballWrapper">
                <img key={bag.imageUrl} className={classes.newArrivalImage} src={bag.imageUrl} />
                <Typography className={classes.arrivalText}>{bag.make}{bag.model}</Typography>
                <Typography className={classes.arrivalText}>{bag.description}</Typography>
                {bag.price ? <Typography className={classes.arrivalText}>${bag.price}</Typography>
                  : null}
              </div>}

            </>
          )) : null}
        </div>
      </section>
    </Layout>
  )
}

export default Bags
