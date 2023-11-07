import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
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
  resetFilterButton: {
    textTransform: "none !important",
    margin: "8px !important"
  }
}));



const Bags = () => {

  const classes = withStyles();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [response, setResponse] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [price, setPrice] = useState('');
  const [make, setMake] = useState('')
  const [reset, setReset] = useState(false)
  const [makes, setMakes] = useState([])

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    sortBalls(event.target.value);
  };

  const sortBalls = (sortBy) => {
    if (sortBy === "high") {
      setData(data.sort((ball1, ball2) => ball2.price - ball1.price))
    } else if (sortBy === "low") {
      setData(data.sort((ball1, ball2) => ball1.price - ball2.price))
    }
  }

  const handleMakeChange = (e) => {
    setMake(e.target.value)
    let filterNullData = data.filter((ball) => ball.make);
    setFilteredData(filterNullData.filter(ball => ball.make === e.target.value))
  }

  const resetFilters = () => {
    setPrice('')
    setMake('')
    setReset(true)
  }

  const newArrivalBaseUrl = "https://strapi.b2pproshop.com/api/bags?populate=*"


  useEffect(() => {
    axios.get(newArrivalBaseUrl).then((res) => {
      formatData(res.data);
      setResponse(res.data);
    });
  }, [reset])

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
    if (filteredData) {
      setFilteredData(null)
    } else {
      setData(dataAttributes.sort((a, b) => a.featured - b.featured));
      let tempMakes = dataAttributes.filter(ball => ball.make).map(item => item.make.trim());
      setMakes([...new Set(tempMakes)])
    }
    setReset(false)
  }


  return (
    <Layout>
      <SEO title="Bags" />
      <section class="ballPageWrapper">
        <Typography className={classes.someOfWorkHeader}>Bags</Typography>
        <p style={{ textAlign: "center", marginTop: "25px", padding: "20px", borderTopRightRadius: "15px", borderTopLeftRadius: "15px" }}>We offer top-quality Single, Double, and Triple Roller & Carry bags.</p>
        <div>
          <Typography>Sort by: (excludes Featured Bags) </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Price</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={price}
              label="Price lower"
              onChange={handlePriceChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"high"}>Higest to Lowest</MenuItem>
              <MenuItem value={"low"}>Lowest to Highest</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Manufacturer</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={make}
              label=""
              onChange={handleMakeChange}
            >
              {makes ? makes.map(make =>
                <MenuItem value={make}>{make}</MenuItem>
              )
                : null}
            </Select>
          </FormControl>
          <Button className={classes.resetFilterButton} onClick={() => resetFilters()} color="error" variant="outlined">Reset Filters</Button>
        </div>
        {featured ? <h2 class="featuredBallTitle">Featured Bags</h2> : null}

        <div class="featuredBallWrapper">
          {featured ? featured.map(ball => (
            <>
              {ball.link ? <a style={{ textDecoration: "none" }} href={`${ball.link}`} target="_blank">
                <div class="ballWrapper">
                  <img key={ball.imageUrl} className={classes.newArrivalImage} src={ball.imageUrl} />
                  <Typography className={classes.arrivalText}>{ball.make}{ball.model}</Typography>
                  {ball.price ? <Typography className={classes.arrivalText}>${ball.price}</Typography>
                    : null}
                  <Typography className={classes.arrivalText}>{ball.description}</Typography>

                </div>
              </a> : <div class="ballWrapper">
                <img key={ball.imageUrl} className={classes.newArrivalImage} src={ball.imageUrl} />
                <Typography className={classes.arrivalText}>{ball.make}{ball.model}</Typography>
                {ball.price ? <Typography className={classes.arrivalText}>${ball.price}</Typography>
                  : null}
                <Typography className={classes.arrivalText}>{ball.description}</Typography>

              </div>}

            </>

          )) : null}
        </div>
        <h2 class="featuredBallTitle">All Bags</h2>
        <div class="newArrivalRoot">
          {filteredData ? filteredData.map(ball => (
            <>
              {ball.link ?
                <a style={{ textDecoration: "none" }} href={`${ball.link}`} target="_blank">
                  <div class="ballWrapper">
                    <img key={ball.imageUrl} className={classes.newArrivalImage} src={ball.imageUrl} />
                    <Typography className={classes.arrivalText}>{ball.make} {ball.model}</Typography>
                    {ball.price ? <Typography className={classes.arrivalText}>${ball.price}</Typography>
                      : null}
                    <Typography className={classes.arrivalText}>{ball.description}</Typography>

                  </div>
                </a> : <div class="ballWrapper">
                  <img key={ball.imageUrl} className={classes.newArrivalImage} src={ball.imageUrl} />
                  <Typography className={classes.arrivalText}>{ball.make} {ball.model}</Typography>
                  {ball.price ? <Typography className={classes.arrivalText}>${ball.price}</Typography>
                    : null}
                  <Typography className={classes.arrivalText}>{ball.description}</Typography>

                </div>}

            </>
          )) : data.map(ball => (
            <>
              {ball.link ?
                <a style={{ textDecoration: "none" }} href={`${ball.link}`} target="_blank">
                  <div class="ballWrapper">
                    <img key={ball.imageUrl} className={classes.newArrivalImage} src={ball.imageUrl} />
                    <Typography className={classes.arrivalText}>{ball.make} {ball.model}</Typography>
                    {ball.price ? <Typography className={classes.arrivalText}>${ball.price}</Typography>
                      : null}
                    <Typography className={classes.arrivalText}>{ball.description}</Typography>

                  </div>
                </a> : <div class="ballWrapper">
                  <img key={ball.imageUrl} className={classes.newArrivalImage} src={ball.imageUrl} />
                  <Typography className={classes.arrivalText}>{ball.make} {ball.model}</Typography>
                  {ball.price ? <Typography className={classes.arrivalText}>${ball.price}</Typography>
                    : null}
                  <Typography className={classes.arrivalText}>{ball.description}</Typography>

                </div>}
            </>

          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Bags
