import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ballWallImage from "../images/ballwall_5.jpeg"
import fiveStar from '../images/fiveStar.png'
import Divider from '@material-ui/core/Divider'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@mui/icons-material/Email';
import StarRateIcon from '@material-ui/icons/StarRate';
import FacebookIcon from "../images/facebook_icon4.svg"
import GoogleIcon from "../images/google_icon.png"
import "./main.css"

const withStyles = makeStyles(() => ({
    mainRoot: {
        display: "flex",
        flexDirection: "column",
    },
    landingWrapper: {
        display: "flex",
        // minHeight: "100vh",
        minHeight: "100vh",
        flexDirection: "column",
        margin: "auto"

    },
    aboutBackgroundImage: {
        width: "100%",
    },
    servicesWrapper: {
        display: "flex",
        flexDirection: "column",
        background: "#008a9c"
    },
    aboutWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "0 1rem",
        color: "black",
        marginBottom: "50px",
        "@media(max-width: 600px)": {
            flexDirection: "column"
        }
    },
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
        margin: "0px auto",
        "@media(max-width: 600px)": {
            borderRadius: "15px 15px 0px 0px",
            width: "100%"
        }
    },
    arrivalText: {
        color: "black",
        padding: "30px",
        width: "100%",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    scrollToSectionOne: {
        height: "80px",
        backgroundColor: "white"
    },
    scrollToProduct: {
        height: "80px",
        backgroundColor: "#deddc1"
    },
    scrollToContact: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    phoneEmailWrapper: {
        display: "flex",
        justifyContent: "center",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            textAlign: "center"
        }
    },
    contactPhone: {
        color: "#a91806",
        textDecoration: "none",
        // fontFamily: "Raleway, sans-serif",
    },
    contactButton: {
        margin: "20px",
        backgroundColor: "#a91806",
        color: "white",
        borderColor: "#a91806",
        borderRadius: "35px",
        padding: "15px",
        paddingLeft: "25px",
        paddingRight: "25px",
        textTransform: "none",
        fontSize: "1.0rem",
        // width: "190px",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: "#001841",
            boxShadow: 'none',
            cursor: "pointer"
        },
    },
    reviewsWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        textAlign: "center",
        alignItems: "center",
    },
    reviewClickText: {
        textTransform: "none"
    },
    reviewStarWrapper: {
        display: "flex",
        flexDirection: "column"
    },
    reviewLink: {
        textDecoration: "none"
    },
    reviewCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#white",
        width: "250px",
        minHeight: "100px",
        margin: "10px",
        padding: "10px"
    },
    reviewCardText: {
        fontSize: "0.75rem"
    },
    reviewCardsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "15%",
        "@media(max-width: 600px)": {
            justifyContent: "center",
            marginLeft: "unset"
        }
    },
    phoneIcon: {
        marginRight: "10px"
    },
    emailIcon: {
        marginRight: "10px"
    },
    bbbWrapper: {
        display: "flex",
        margin: "auto",
        marginTop: "0px",
        backgroundColor: "white",
        borderRadius: "14px",
        "@media(max-width:600px)": {
            flexDirection: "column",
            justifyContent: "center",
            height: "110px",
            marginBottom: "20px",
        }
    },
    bbbLink: {
        display: "flex",
        textDecoration: "none",
        padding: "10px",
    },
    bbbImage: {
        margin: "auto",
        padding: "10px",
        minWidth: "200px",
        maxWidth: "300px",
        maxHeight: "150px",
        borderRadius: "15px"
    },
    bbbYearsCircle: {
        width: "65px",
        height: "65px",
        backgroundColor: "#1f5a76",
        margin: "auto",
        marginRight: "10px",
        fontFamily: "proxima-nova, Helvetica, Arial, sans-serif",
        borderRadius: "14px"
    },
    bbbCirleText: {
        color: "white",
        opacity: "1 !important",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "2.0rem"
    },
    phBizCardWrapper: {
        display: "flex",
        justifyContent: "center"
    },
    phBizCardImage: {
        maxWidth: "300px",
        maxHeight: "200px"
    },
    fiveStar: {
        color: "#f5b81c"
    },
    hourText: {
        display: "flex",
        color: "black",
        margin: "10px auto",
        justifyContent: "center",
        fontSize: "1.25rem"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuHeaderTextMenu: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuBlockWrapper: {
        display: "flex"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.75rem"
    },
    aboutTitleHeader: {
        textAlign: "center",
        fontSize: "2.5rem",
        color: "black",
        marginBottom: 0
    },
    aboutHeader: {
        fontSize: "1.5rem",
        textAlign: "center"
    },
    addressText: {
        textAlign: "left",
        margin: "40px 0",
        lineHeight: 2,
    },
    scrollToLocation: {
        height: "100px",
        flexDirection: "column"
    },
    socialLinkWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0 40px 0"
    },
    aboutSectionWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& iframe": {
            "@media(max-width:600px)": {
                width: "90%",
                margin: "auto"
            }
        },

    },
    reviewHeader: {
        fontSize: "1.2rem",
        textTransform: "none",
        color: "white",
        margin: 0,
    },
    socialFooterMargin: {
        height: "40px",
        width: "40px",
        margin: "10px auto"
    },
    socialFooter: {
        height: "40px",
        width: "40px",
        margin: "0 10px"
    },
    socialFacebookSpacing: {
        height: "40px",
        width: "40px",
        margin: "0 10px",
        marginBottom: "2px"
    },
    socialLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    reviewButton: {
        backgroundColor: "#333333",
        borderRadius: "25px",
        padding: "20px",
        marginBottom: "20px",
        border: "none"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        margin: "20px 0"
    },
    containerThemeColorOne: {
        display: "flex",
        flexDirection: "column",
        padding: "20px 0",
        backgroundColor: "#deddc1"
    },
    containerMarginBottomSmall: {
        display: "flex",
        flexDirection: "column",
        margin: "20px 0",
        marginBottom: "80px"
    },
    landingImage: {
        width: "100%",
        objectFit: "cover",
        aspectRatio: "1/1",
        height: "100vh",
        marginTop: "112px",
        marginBottom: "0px"
    },
    mainBanner: {
        display: "flex",
        backgroundSize: "cover",
        justifyContent: "flex-end",
        height: "100vh",
        "@media(max-width:600px)": {
            justifyContent: "center",
            backgroundPosition: "center"
        }
    },
    mainBannerText: {
        color: "white",
        fontSize: "3.5rem",
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "'Montserrat', sans-serif !important",
        zIndex: 1,
        height: "fit-content",
        opacity: "0.85",
        zIndex: 0,
        // borderRadius: "35px",
        padding: "20px",
        "@media(max-width:600px)": {
            fontSize: "2rem",
            textAlign: "center",
            padding: "15px",
        }
    },
    mainBannerTextWrapper: {
        display: "flex",
        margin: "20% auto",
        width: "100%",
        flexDirection: "column",
        "@media(max-width:600px)": {
            margin: "30% auto"
        }
    },
    getDirectionsLinkDark: {
        backgroundColor: "#333333",
        color: "white",
        textTransform: "none",
        width: "300px",
        borderRadius: "35px"
    },
    connectHeader: {
        fontSize: "2rem",
        textAlign: "center",
        color: "black",
        backgroundColor: "white"
        // textTransform: "uppercase"
    },
    someOfWorkHeaderProducts: {
        textAlign: "center",
        fontSize: "2.5rem",
        color: "#a91806",
        backgroundColor: "#deddc1",
        padding: "10px",
        width: "100%",
        margin: "auto",
        "@media(max-width: 600px)": {
            // padding: "50px 25px",
        }
    },
    productCard: {
        margin: "15px",
        backgroundColor: "#a91806 !important",
        height: "450px",
        "& img": {
            maxHeight: "345px",
            width: "100%",
            aspectRatio: "1/1",
            objectFit: "cover"
        },
        "& div": {
            color: "#deddc1"
        },
        "& p": {
            color: "#deddc1"
        },
        "@media(max-width: 600px)": {
            margin: "15px 0"
        }
    },

}))

const Main = () => {
    const classes = withStyles();

    const [data, setData] = useState([]);
    const [response, setResponse] = useState([]);
    const [hours, setHours] = useState(null);
    const [image, setImage] = useState(null);
    const [newArrivals, setNewArrivals] = useState([]);

    const backgroundImageurl = "https://strapi.b2pproshop.com/api/home-page-background-images?populate=*"
    const hoursUrl = "https://strapi.b2pproshop.com/api/hours"


    const getNewArrivalData = () => {
        let endpoints = [
            "https://strapi.b2pproshop.com/api/balls?populate=*",
            "https://strapi.b2pproshop.com/api/bags?populate=*",
            "https://strapi.b2pproshop.com/api/shoes?populate=*"
        ];

        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
            axios.spread((...allData) => {
                let combineDataFlat = allData.map(obj => obj.data.data).flat();
                formatData(combineDataFlat);
                setResponse(combineDataFlat);
            })
        );
    }

    useEffect(() => {
        getNewArrivalData();
    }, [])


  
    const formatData = (resp) => {
        let data = resp;
        let dataArr = data.map(x => x.attributes.image.data);
        let formattedDataArr = dataArr.map(obj => obj.attributes.formats.small || obj.attributes.formats.thumbnail || obj.attributes.formats.medium);
        let dataAttributes = data.map(newArrival => newArrival.attributes);

        for (let i = 0; i < dataAttributes.length; i++) {
            for (let j = 0; j < formattedDataArr.length; j++) {
                dataAttributes[i].imageUrl = formattedDataArr[i]
            }
        }

        let newArrivals = dataAttributes.filter((item => item.newArrival === true))
        setNewArrivals(newArrivals)
        // featured ordered first
        setData(dataAttributes.sort((a, b) => a.featured - b.featured));
    }


    useEffect(() => {
        axios.get(backgroundImageurl).then((res) => {
            formatImage(res.data)
        });
    }, []);

    useEffect(() => {
        axios.get(hoursUrl).then((res) => {
            formatHours(res.data)
        });
    }, []);

    const formatImage = (resp) => {
        let images = resp.data;
        if(resp.data.length > 0){
            setImage(images[0].attributes.image.data.attributes.url)
        } else {
            console.log("no homepage image uploaded")
        }
    }

    const formatHours = (resp) => {
        let data = resp.data;
        let dataSort = data.sort((day1, day2) => day1.id - day2.id);
        let formattedHourData = dataSort.map(x => x.attributes)
        setHours(formattedHourData)
    }





    return (
        <div className={classes.mainRoot}>
            <div className={classes.mainBanner} style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${image || ballWallImage})`,
            }}>
                <div className={classes.mainBannerTextWrapper}>
                    <Typography className={classes.mainBannerText}>Begin'rs To Pro's <br />
                        <Typography>Rochester's premier bowling supply store</Typography>
                        {/* <i>every time</i> */}
                    </Typography>
                </div>
            </div>
            <div className={classes.container}>
                <span className={classes.scrollToSectionOne} id="sectionOne"></span>
            </div>

            <section class="sectionTwoThemeColorOne">
                <Typography className={classes.someOfWorkHeader}>New Items & Arrivals</Typography>
                <div class="newArrivalRoot">
                    {newArrivals ? newArrivals.map(newArrival => (
                              <>
                              {newArrival.link ? <a style={{textDecoration: "none"}} href={`${newArrival.link}`} target="_blank">
                                  <div class="newArrivalWrapper">
                                      <img key={newArrival.imageUrl} className={classes.newArrivalImage} src={newArrival.imageUrl.url} />
                                      <Typography className={classes.arrivalText}>{newArrival.make} {newArrival.model}</Typography>
                                      {newArrival.price ? <Typography className={classes.arrivalText}>${newArrival.price}</Typography>
                                          : null}
                                      <Typography className={classes.arrivalText}>{newArrival.description}</Typography>
                                  </div>
                              </a> : <div class="newArrivalWrapper">
                                  <img key={newArrival.imageUrl} className={classes.newArrivalImage} src={newArrival.imageUrl.url} />
                                  <Typography className={classes.arrivalText}>{newArrival.make} {newArrival.model}</Typography>
                                  {newArrival.price ? <Typography className={classes.arrivalText}>${newArrival.price}</Typography>
                                      : null}
                                  <Typography className={classes.arrivalText}>{newArrival.description}</Typography>
                           
                              </div>}
  
                          </>
                    )) : null}
                </div>
            </section>


            <div className={classes.containerThemeColorOne}>
                <span className={classes.scrollToProduct} id="sectionTwo"></span>
            </div>
            <section class="productSectionWrapper">
                <div>
                    <Typography className={classes.someOfWorkHeaderProducts}>Products</Typography>
                    <div class="productCardWrapper">
                        <Link style={{ textDecoration: "none" }} to="/balls">
                            <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                                <StaticImage src="../images/ball_closeup.jpeg" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Balls
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        Balls                                
                                    </Typography> */}
                                </CardContent>
                            </Card>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/shoes">
                            <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                                <StaticImage src="../images/shoewall_1.jpg" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Shoes
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        Shoe description
                                    </Typography> */}
                                </CardContent>
                            </Card>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/bags">

                            <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                                <StaticImage src="../images/just_bags.jpeg" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bags
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        Bags description                                
                                    </Typography> */}
                                </CardContent>
                            </Card>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/sports-cards">

                            <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                                <StaticImage src="../images/cards_hockey_1.jpeg" />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Sports Cards
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        Sports cards description
                                    </Typography> */}
                                </CardContent>
                            </Card>
                        </Link>

                        <Link style={{ textDecoration: "none" }} to="/awards">
                            <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                                <StaticImage src="../images/trophywall_1.jpg" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Custom Trophies, Engravings, and Awards
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        Trophies & Engravings description
                                    </Typography> */}
                                </CardContent>
                            </Card>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/closeouts">
                            <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                                <StaticImage src="../images/ball_closeup.jpeg" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Closeouts
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        Trophies & Engravings description
                                    </Typography> */}
                                </CardContent>
                            </Card>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/coaching">
                            <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                                <StaticImage src="../images/coaching.jpeg" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Coaching
                                    </Typography>
                                    {/* <Typography variant="body2" color="text.secondary">
                                        Coaching description
                                    </Typography> */}
                                </CardContent>
                            </Card>
                        </Link>
                        {/* <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/trophywall_2.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Awards
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Awards descriptions
                                </Typography>
                            </CardContent>
                        </Card> */}
                    </div>
                </div>


            </section>

            <section class="py-5 section-bubble3">
                <div className={classes.container}>
                    <div className={classes.aboutWrapper}>
                        <div className={classes.aboutSectionWrapper}>
                            <Typography className={classes.aboutTitleHeader}>About Us</Typography>
                            <Typography className={classes.addressText}>
                                At Begin'rs To Pro's Pro Shop, we take pride in being your trusted source for all things
                                bowling. Whether you're an experienced pro or just starting your journey in the world of bowling, we have the expertise and
                                equipment to help you excel. Explore our extensive collection of bowling balls, shoes, and apparel, ensuring that you find the perfect fit and style to enhance your game. Our knowledgeable staff is always available to offer expert guidance, ensuring you get the ideal gear for your unique needs.
                            </Typography>
                            <Typography className={classes.aboutHeader}>Sports Card Collectors' Paradise:</Typography>
                            <Typography className={classes.addressText}>
                                In addition to our outstanding bowling gear, Begin'rs To Pro's Pro Shop is a haven for sports card enthusiasts.
                                We offer a diverse range of sports cards, including baseball, hockey, and vintage cards.
                                Whether you're searching for a specific card or are looking to offload some of your own collection, we'd love to have you stop by.
                            </Typography>

                            <Typography className={classes.aboutHeader}>Celebrate Excellence</Typography>
                            <Typography className={classes.addressText}>Beyond bowling and sports cards, Begin'rs To Pro's Pro Shop specializes in
                                celebrating excellence. We provide a wide selection of trophies and awards to honor
                                achievements in sports, academics, and more. Our expert engraving services allow you to
                                personalize your awards, creating enduring mementos of success.
                            </Typography>

                            <div class="valuesWrapper">
                                <br />
                                <Typography className={classes.aboutHeader}>Our Values</Typography>
                                <br />
                                <p><b>Passion and Expertise:</b> Our team is driven by a genuine love for bowling. We're here to share our passion and knowledge with you.
                                </p>

                                <p><b>Quality Products:</b> We stock only the finest bowling equipment, trophies, and awards to ensure your complete satisfaction.
                                </p>
                                <p><b>Personalized Service:</b> Whether you're a first-time visitor or a long-time customer, we treat everyone like family. Expect exceptional service tailored to your unique needs.
                                </p>
                                <p><b>Community Focus:</b> Begin'rs To Pro's Pro Shop is more than just a store; it's a gathering place for individuals who share a love for bowling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <span className={classes.scrollToLocation} id="sectionThree"></span>


            <span className={classes.scrollToContact} id="contactForm"></span>
            <section class="py-5 section-bubble4">
                <div className={classes.container}>
                    <div>
                        <Typography className={classes.connectHeader}>Contact Us</Typography>
                        <div className={classes.phoneEmailWrapper}>
                            <a href="tel:(585) 663-1020" className={classes.contactPhone}>
                                <Button className={classes.contactButton}>
                                    <PhoneIcon className={classes.phoneIcon} />
                                    (585) 663-1020
                                </Button>
                            </a>
                            <a href="mailto:beginrstopros@gmail.com" className={classes.contactPhone}>
                                <Button className={classes.contactButton}>
                                    <EmailIcon className={classes.phoneIcon} />
                                    Email us
                                </Button>
                            </a>
                            <div className={classes.socialLinkWrapper}>
                                <a href="https://www.facebook.com/profile.php?id=100057525366325" target="_blank" className={classes.socialLink}>
                                    <img className={classes.socialFacebookSpacing} src={FacebookIcon} />
                                </a>
                            </div>

                        </div>
                        <div class="mapWrapper">
                            <Typography style={{ margin: "15px" }}>1584 W Ridge Rd, Rochester, NY 14615</Typography>
                            <Button className={classes.getDirectionsLinkDark} href="https://www.google.com/search?q=begin%27rs+to+pro%27s&oq=beg&aqs=chrome.0.69i59j69i61l2j69i60l3j69i61j69i65.949j0j7&sourceid=chrome&ie=UTF-8#" target="_blank">
                                Get Directions
                            </Button>
                            <br />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11632.608520682044!2d-77.6656959!3d43.2062984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d6b15a62e15383%3A0xde8d1c6cda4089a6!2sBegin&#39;rs%20To%20Pro&#39;s!5e0!3m2!1sen!2sus!4v1694634609218!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div style={{ backgroundColor: "white" }}>
                            <Typography className={classes.connectHeader}>Hours</Typography>
                            <div class="hoursWrapper">
                                {hours ? hours.map(data => (
                                    <div class="hoursDayTime">
                                        <p>{data.day}</p>
                                        {data.day === "Sunday" ? <p class="hoursTime">Closed</p> : (
                                            <p class="hoursTime">{data.openTime} - {data.closeTime}</p>
                                        )}
                                    </div>
                                )) : null}
                            </div>
                            <div className={classes.reviewsWrapper}>
                                <a className={classes.reviewLink}
                                    href=""
                                    target="_blank"
                                >
                                    <Button
                                        className={classes.reviewButton}
                                    >
                                        <div className={classes.reviewStarWrapper}>
                                            <Typography className={classes.reviewHeader}>Leave us a review!</Typography>
                                            <img className={classes.socialFooterMargin} src={GoogleIcon} />
                                        </div>
                                    </Button>
                                </a>
                            </div>
                        </div>
                        {/* <div className={classes.reviewsWrapper}>
                            <a className={classes.reviewLink}
                                href=""
                                target="_blank"
                            >
                                <Button
                                    className={classes.reviewButton}
                                >
                                    <div className={classes.reviewStarWrapper}>
                                        <Typography className={classes.reviewHeader}>Leave us a review!</Typography>
                                        <img className={classes.socialFooterMargin} src={GoogleIcon} />
                                        <FiveStar />
                                    </div>
                                </Button>
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
