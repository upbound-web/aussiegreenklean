import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Helmet from "react-helmet"
// react components for routing our app without refresh
//import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
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
import IconBanner from "./Sections/IconBanner.jsx"

//images
import koala from "assets/img/agkkoala.png"

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Helmet>
          <title>Aussie Green Clean</title>
          <description>Taree and The Manning Great Lakes premier cleaning service. Offering an all natural cleaning service. We make our own cleaning products and make sure that there are no nasty chemicals in there. Offering Domestic cleaning, Commercial Cleaning, Ironing and Washing, window cleans, solar panel cleaning, builders clean, Mowing Lawn maintanance and rubbish removal </description>
        </Helmet>
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
                  <Button className={classes.bookbtn} type="button" color="primary" size= "lg" round href="https://book.servicem8.com/request_service_booking?strVendorUUID=f588290e-1fea-44d5-b231-2dfe4adc487b">Book Now</Button>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <AboutUs />
          <IconBanner />
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
        </div>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
