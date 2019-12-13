import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
//import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
//facebook chat
import MessengerCustomerChat from "react-messenger-customer-chat";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
//import SectionBasics from "./Sections/SectionBasics.jsx";
//import SectionNavbars from "./Sections/SectionNavbars.jsx";
//import SectionTabs from "./Sections/SectionTabs.jsx";
//import SectionPills from "./Sections/SectionPills.jsx";
//import SectionNotifications from "./Sections/SectionNotifications.jsx";
//import SectionTypography from "./Sections/SectionTypography.jsx";
//import SectionJavascript from "./Sections/SectionJavascript.jsx";
//import SectionCarousel from "./Sections/SectionCarousel.jsx";
//import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
//import SectionLogin from "./Sections/SectionLogin.jsx";
//import SectionExamples from "./Sections/SectionExamples.jsx";
//import SectionDownload from "./Sections/SectionDownload.jsx";
import AboutUs from "./Sections/AboutUs.jsx"
import Services from "./Sections/Services.jsx"
import ContactUs from "./Sections/ContactUs.jsx"

//images
import koala from "assets/img/agkkoala.png"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Aussie Green Klean"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: "primary",
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg9.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <img 
                    src={koala}
                    alt="koala"
                    className={classes.imgFluid + " " + classes.koalaImg} />  
                  <h1 className={classes.title}>Book Online Today</h1>
                  <h3 className={classes.subtitle}>
                    Naturally Cleaning Your Home
                  </h3>
                  <Button className={classes.bookbtn} type="button" color="primary" size= "lg" round>Book Now</Button>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <AboutUs />
          <Services />
          <ContactUs />
          {/*
          <SectionBasics />         
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload />
          */}
        </div>
        <Footer />
        <div>
          <MessengerCustomerChat
            pageId="1089826211076305"
            appId="263902037430900"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
