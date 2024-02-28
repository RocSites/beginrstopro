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
    aspectRatio: "1/1",
    objectFit: "cover",
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



const HonorRoll = () => {

  const classes = withStyles();

  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);
  const [featured, setFeatured] = useState([]);


  const honorRollUrl = "https://btp-strapi-qxtpiid5ka-ue.a.run.app/api/honor-rolls?populate=*";


  useEffect(() => {
    axios.get(honorRollUrl).then((res) => {
      formatData(res.data);
      setResponse(res.data);
    });
  }, [])

  const formatData = (resp) => {
    let data = resp.data;
    let dataArr = data.map(x => x.attributes.image.data);
    let formattedDataArr = dataArr.map(obj => obj.attributes.formats.small || obj.attributes.formats.thumbnail || obj.attributes.formats.medium);

    let dataAttributes = data.map(newArrival => newArrival.attributes);
    console.log(dataAttributes)
    for (let i = 0; i < dataAttributes.length; i++) {
      for (let j = 0; j < formattedDataArr.length; j++) {
        dataAttributes[i].imageUrl = formattedDataArr[i]
      }
    }

    setData(dataAttributes)

  }


  return (
    <Layout>
      <SEO title="Honor Roll" />
      <section class="ballPageWrapper">
        <Typography className={classes.someOfWorkHeader}>Honor Roll</Typography>
        <p style={{textAlign: "center"}}><b>Congratulations to our Begin'rs To Pro's Customers!</b></p>
        <div class="newArrivalRoot">
          {data ? data.map(card => (
            <div class="ballWrapper">
              <img key={card.imageUrl} className={classes.newArrivalImage} src={card.imageUrl.url} />
              <Typography className={classes.arrivalText}>{card.name}</Typography>
              <Typography className={classes.arrivalText}>{card.description}</Typography>
            </div>
          )) : null}
        </div>
      </section>
    </Layout>
  )
}

export default HonorRoll




