import React, { useState } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Button from '@material-ui/core/Button'
import BeginrsLogo from "../images/beginrs_logo.jpeg"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from "../images/facebook_icon4.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./main.css"

const withStyles = makeStyles(() => ({
  "@global": {
    "*": {
      // fontFamily: "Angkor !important",
      fontWeight: "100"
    }
  },
  navBarRoot: {
    position: "fixed",
    display: "flex",
    background: "black",
    color: "white",
    justifyContent: "space-between",
    width: "100%",
    height: "112px",
    top: 0,
    boxShadow: "1px 0 10px 0 rgb(89 98 115 / 20%)",
    zIndex: "1",
    // opacity: "0.85"
  },
  navBarTitle: {
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  },
  navButton: {
    color: "white",
    // fontWeight: "bold",
    textTransform: "none",
    margin: "auto 10px",
    textDecoration: "none"
  },
  navBarButtonWrapper: {
    display: "flex",
    color: "white",
    margin: "10px",
    "@media(max-width: 600px)": {
      display: "none"
    }
  },
  navBarHamburgerDrawerWrapper: {
    display: "none",
    "@media(max-width: 601px)": {
      display: "flex",
      margin: "auto 10px"
    }
  },
  navLogo: {
    display: "flex",
    width: "160px",
    margin: "auto",
    borderRadius: "15px"
  },
  drawerItem: {
    "&:hover": {
      backgroundImage: "#f03d3dcf",
      border: "1px solid ##f03d3dcf",
      color: "white"
    },
    "&:selected:hover": {
      backgroundImage: "#f03d3dcf",
      border: "1px solid ##f03d3dcf",
      color: "white"
    }
  },
  list: {
    width: "250px"
  },
  hamburgerIcon: {
    margin: "20px",
    fontSize: "2.5rem",
    color: "red",
    "@media(min-width: 601px)": {
      display: "none"
    }
  },
  navLeftWrapper: {
    display: "flex",
  },
  navCallButton: {
    display: "flex",
    backgroundColor: "#a91806",
    padding: "8px 16px",
    color: "#deddc1",
    textTransform: "none",
    borderRadius: "35px",
    height: "50px",
    margin: "auto 20px"
  },
  navCallButtonMobile: {
    display: "flex",
    backgroundColor: "#a91806",
    padding: "8px 16px",
    color: "#deddc1",
    textTransform: "none",
    borderRadius: "35px",
    height: "50px",
    margin: "auto 20px",
    "@media(max-width: 600px)": {
      fontSize: "0.75rem",
      margin: "auto"
    }
  },
  drawerLinkWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  navButtonMobile: {
  color: "black",
  // fontWeight: "bold",
  textTransform: "none",
  margin: "10px 16px",
  textDecoration: "none"
}
}))


const Header = ({ siteTitle }) => {

  const classes = withStyles();
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(drawerOpen => !drawerOpen)
  }

  return (
    <header
      className={classes.navBarRoot}
    >
      <div className={classes.navLeftWrapper}>
        <div className={classes.navBarTitle}>
          <Link to="/" style={{ color: '#001841', textDecoration: `none` }}>
            <img className={classes.navLogo} src={BeginrsLogo} alt="company logo" />
          </Link>
        </div>
        <div className={classes.navBarButtonWrapper}>
          <AnchorLink className={classes.navButton}
            to="/#sectionTwo" title="Products">
          </AnchorLink>
          <AnchorLink className={classes.navButton}
            to="/#sectionOne" title="New Arrivals">
          </AnchorLink>
          <AnchorLink className={classes.navButton}
            to="/#sectionThree" title="About">
          </AnchorLink>
          <AnchorLink className={classes.navButton}
            to="/#contactForm" title="Contact">
          </AnchorLink>
      

          <Button
            className={classes.navCallButton}
            target="_blank" href="tel:(585) 663-1020"
          >
            <PhoneIcon class="drawerPhoneIcon" />
            Call Us
          </Button>
        </div>
      </div>

      <div class="socialLinkWrapperNav">
        <a href="https://www.facebook.com/profile.php?id=100057525366325" target="_blank" class="socialLink">
          <img class="socialNavFb" src={FacebookIcon} />
        </a>
      </div>
      <div className={classes.navBarHamburgerDrawerWrapper}>
        <Button
          className={classes.navCallButtonMobile}
          target="_blank" href="tel:(585) 663-1020"
        >
          <PhoneIcon class="drawerPhoneIcon" />
          Call Us
        </Button>
        <MenuIcon
          className={classes.hamburgerIcon}
          onClick={toggleDrawer}
        />
        <Drawer
          open={openDrawer}
          onClose={toggleDrawer}
          anchor="right"
          className={classes.drawerRoot}
        >
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              <div className={classes.drawerLinkWrapper}>
                <AnchorLink className={classes.navButtonMobile}
                  to="/#sectionTwo" title="Products">
                </AnchorLink>
                <AnchorLink className={classes.navButtonMobile}
                  to="/#sectionOne" title="New Arrivals">
                </AnchorLink>
                <AnchorLink className={classes.navButtonMobile}
                  to="/#sectionThree" title="About">
                </AnchorLink>
                <AnchorLink className={classes.navButtonMobile}
                  to="/#contactForm" title="Contact">
                </AnchorLink>
              </div>

              <Button
                class="drawerItemLogin"
                target="_blank" href="tel:(585) 663-1020"
              >
                <PhoneIcon class="drawerPhoneIcon" />
                Call Us
              </Button>
              <div class="socialLinkWrapperNavMobile">
                <a href="" target="_blank" class="socialLink">
                  <img class="socialDrawerFb" src={FacebookIcon} />
                </a>
              </div>
            </List>

          </div>
        </Drawer>

      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
