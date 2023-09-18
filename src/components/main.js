import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import rocBuildingOne from "../images/yassine-khalfalli-roc-image.jpg"
import ballWallImage from "../images/ballwall_5.jpeg"
import fiveStar from '../images/fiveStar.png'
import Divider from '@material-ui/core/Divider'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@mui/icons-material/Email';
import StarRateIcon from '@material-ui/icons/StarRate';
import FacebookIcon from "../images/facebook_icon4.svg"
import InstagramIcon from "../images/instagram_icon4.svg"
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
        width: "50%",
        maxHeight: "500px",
        "@media(max-width: 600px)": {
            borderRadius: "15px 15px 0px 0px",
            width: "100%"
        }
    },
    arrivalText: {
        color: "#deddc1",
        padding: "30px",
        width: "50%",
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
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${ballWallImage})`,
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
    const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query { 
      desktopImage: file(relativePath: { eq: "yassine-khalfalli-roc-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "yassine-khalfalli-roc-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

    const sources = [
        mobileImage.childImageSharp.fluid,
        {
            ...desktopImage.childImageSharp.fluid,
            media: `(min-width: 650px)`
        }
    ]

    const FiveStar = () => {
        return (
            <div className={classes.fiveStar}>
                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
            </div>
        )
    }


    return (
        <div className={classes.mainRoot}>
            <div className={classes.mainBanner}>
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

                <div class="newArrivalWrapper">
                    <StaticImage className={classes.newArrivalImage} src="../images/new_balls_1.jpeg" />
                    <Typography className={classes.arrivalText}>It's release day! Let's get one or more of these rocks in your hands for the new season. Stop in and see us so we can get your game in shape for the new year.</Typography>
                </div>
                <div class="newArrivalWrapper">
                    <StaticImage className={classes.newArrivalImage} src="../images/new_app_1.jpeg" />
                    <Typography className={classes.arrivalText}>When you purchase the In2ition, get a FREE Apparel Package</Typography>
                </div>

                {/* <Link to="/chill-menu" class="menuContent menuLink chillBlock">
                    Page 2
                </Link>
                <Link to="/grill-menu" class="menuContent menuLink grillBlock">
                    Page 3
                </Link> */}
            </section>


            <div className={classes.containerThemeColorOne}>
                <span className={classes.scrollToProduct} id="sectionTwo"></span>
            </div>
            <section class="productSectionWrapper">
                <div>
                    <Typography className={classes.someOfWorkHeaderProducts}>Products</Typography>
                    <div class="productCardWrapper">
                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/ball_closeup.jpeg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Balls
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Balls                                </Typography>
                            </CardContent>

                        </Card>
                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/shoewall_1.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shoes
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Shoe description
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/just_bags.jpeg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Bags
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Bags description                                </Typography>
                            </CardContent>
                        </Card>
                        <Link style={{textDecoration: "none"}} to="/sports-cards">

                            <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                                <StaticImage src="../images/cards_hockey_1.jpeg" />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Sports Cards
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Sports cards description
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>

                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/trophywall_1.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Trophies & Engravings
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Trophies & Engravings description
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.productCard} sx={{ maxWidth: 345 }}>
                            <StaticImage src="../images/trophywall_2.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Awards
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Awards descriptions
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                    {/* {console.log(productInfo.map(obj => obj.imagePath))}

                    <img src={productInfo[0].imagePath}/>

                    {productInfo.length > 0 ? productInfo.map(obj =>
                        <ProductCard key={obj.title} imagePath={obj.imagePath} title={obj.title} description={obj.description} />
                    ) : null} */}
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
                                {/* <a href="" target="_blank" className={classes.socialLink}>
                                    <img className={classes.socialFooter} src={InstagramIcon} />
                                </a> */}
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
                                <div class="hoursDayTime">
                                    <p>Monday - Friday</p>
                                    <p class="hoursTime">11:00 AM - 6:00 PM</p>
                                </div>
                                <div class="hoursDayTime">
                                    <p>Saturday</p>
                                    <p class="hoursTime">11:00 AM - 3:00 PM</p>
                                </div>
                                <div class="hoursDayTime">
                                    <p>Sunday</p>
                                    <p class="hoursTime">Closed</p>
                                </div>
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
