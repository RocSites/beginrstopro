import React, { useState } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core'
import Button from '@mui/material/Button';
import BeginrsLogo from "../images/beginrs_logo.jpeg"
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from "../images/facebook_icon4.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';


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
    margin: "auto"
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
    "@media(max-width: 800px)": {
      display: "none"
    }
  },
  navBarHamburgerDrawerWrapper: {
    display: "none",
    "@media(max-width: 801px)": {
      display: "flex",
      margin: "auto 10px",
      marginLeft: "-20px"
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
    marginLeft: "0px",
    "@media(min-width: 801px)": {
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
    "@media(max-width: 800px)": {
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
  },
  productMenuLink: {
    textDecoration: "none",
    color: "black",
    margin: "auto 10px",
  }
}))


const Header = ({ siteTitle }) => {

  const classes = withStyles();
  const [openDrawer, setOpenDrawer] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [open, setOpen] = useState(false)

  const productMenuItems = [
    {
      title: 'Products',
      url: '',
      submenu: [
        {
          title: 'Balls',
          url: '/balls',
        },
        {
          title: 'Shoes',
          url: '/shoes',
        },
        {
          title: 'Bags',
          url: '/bags',
        },
        {
          title: 'Sports Cards',
          url: '/sports-cards',
        },
        {
          title: 'Trophies, Engravings, Awards',
          url: '/awards',
        },
        {
          title: 'Closeouts',
          url: '/closeouts',
        },
        {
          title: 'Coaching',
          url: '/coaching'
        }
      ]
    },


  ];

  const toggleDrawer = () => {
    setOpenDrawer(drawerOpen => !drawerOpen)
  }

  const handleClickMobile = () => {
    setOpen(!open)
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
          <div className="productButtonWrapper">
            <button
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}
              style={{
                backgroundColor: "black",
                border: "transparent"
              }}
            >
              Products
              <KeyboardArrowDownIcon />
            </button>
            {dropdown ?
              <ul className={`dropdown dropdown-submenu ${dropdown ? "show" : ""}`}>
                {productMenuItems[0].submenu.map((submenu, index) => (
                  <li key={index} className="menu-items">
                    <a href={submenu.url}>{submenu.title}</a>
                  </li>
                ))}
              </ul>
              : null}
          </div>
          <AnchorLink className={classes.navButton}
            to="/#sectionZero" title="Specials">
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
            style={{
              display: "flex",
              backgroundColor: "#a91806",
              padding: "8px 16px",
              color: "#deddc1",
              textTransform: "none",
              borderRadius: "35px",
              height: "50px",
              margin: "auto 20px"
            }}
            target="_blank" href="tel:(585) 663-1020"
          >
            <PhoneIcon class="drawerPhoneIconL" />
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
          style={{
            display: "flex",
            backgroundColor: "#a91806",
            padding: "8px 16px",
            color: "#deddc1",
            textTransform: "none",
            borderRadius: "35px",
            height: "50px",
            width: "112px",
            margin: "auto 20px",
            "@media(max-width: 800px)": {
              fontSize: "0.75rem",
              margin: "auto"
            }
          }}
          target="_blank" href="tel:(585) 663-1020"
        >
          <PhoneIcon class="drawerPhoneIconL" />
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
          >
            <div className={classes.drawerLinkWrapper}>
              <div className="productButtonWrapperMobile">
                <ListItemButton style={{ paddingLeft: "8px", paddingBottom: "0px", justifyContent: "flex-start" }} onClick={handleClickMobile}>
                  <Typography style={{ fontFamily: "georgia, sans-serif" }}>Products</Typography>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <List>
                      {productMenuItems[0].submenu.map((submenu, index) => (
                        <ListItemText key={index} className="menu-items">
                          <a style={{ fontFamily: "georgia, sans-serif", paddingLeft: "16px" }} href={submenu.url}>{submenu.title}</a>
                        </ListItemText>
                      ))}
                    </List>
                  </List>
                </Collapse>
                {dropdown ?
                  <ul className={`dropdown-mobile dropdown-submenu ${dropdown ? "show" : ""}`}>
                    {productMenuItems[0].submenu.map((submenu, index) => (
                      <li key={index} className="menu-items">
                        <a href={submenu.url}>{submenu.title}</a>
                      </li>
                    ))}
                  </ul>
                  : null}
              </div>

            </div>
            <List
              onClick={toggleDrawer}
              onKeyDown={toggleDrawer}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <AnchorLink className={classes.navButtonMobile}
                to="/#sectionZero" title="Specials">
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
