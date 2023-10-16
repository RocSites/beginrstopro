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
        backgroundColor: "#a91806",
        color: "white",
        borderRadius: "35px",
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



const Balls = () => {

    const classes = withStyles();

    const [data, setData] = useState([]);
    const [response, setResponse] = useState([]);
    const [featured, setFeatured] = useState([]);

    //   TODO - need to make request for all endpoints (bags, balls, cards, shoes) that have a closeout = true
    const newArrivalBaseUrl = "https://strapi.b2pproshop.com/api/balls?populate=*"

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
        console.log(dataAttributes)

        for (let i = 0; i < dataAttributes.length; i++) {
            for (let j = 0; j < formattedDataArr.length; j++) {
                dataAttributes[i].imageUrl = formattedDataArr[i]
            }
        }

        let closeOuts = dataAttributes.filter((item => item.closeout === true))
        setFeatured(closeOuts)
        // featured ordered first
        setData(dataAttributes.sort((a, b) => a.featured - b.featured));
    }


    return (
        <Layout>
            <SEO title="Ball" />
            <section class="ballPageWrapper">
                <Typography className={classes.someOfWorkHeader}>Closeouts</Typography>
                {/* {featured ? <h2 class="featuredBallTitle">Featured Closeout Items</h2> : null} */}

                <div class="featuredBallWrapper">
                    {featured ? featured.map(ball => (
                        <>
                            {ball.link ? <a href={`${ball.link}`}>
                                <div class="ballWrapper">
                                    <img key={ball.imageUrl} className={classes.newArrivalImage} src={ball.imageUrl} />
                                    <Typography className={classes.arrivalText}>{ball.name}</Typography>
                                    <Typography className={classes.arrivalText}>{ball.description}</Typography>
                                    {ball.price ? <Typography className={classes.arrivalText}>${ball.price}</Typography>
                                        : null}
                                </div>
                            </a> : <div class="ballWrapper">
                                <img key={ball.imageUrl} className={classes.newArrivalImage} src={ball.imageUrl} />
                                <Typography className={classes.arrivalText}>{ball.name}</Typography>
                                <Typography className={classes.arrivalText}>{ball.description}</Typography>
                                {ball.price ? <Typography className={classes.arrivalText}>${ball.price}</Typography>
                                    : null}
                            </div>}

                        </>

                    )) : null}
                </div>
            </section>
        </Layout>
    )
}

export default Balls