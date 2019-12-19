import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
//individual jss
import aboutUsStyle from "assets/jss/material-kit-react/views/componentsSections/aboutUsStyle.jsx";
//images
import aussieLogo from "assets/img/aussie_logo.png"

class AboutUs extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sections} id="aboutus">
                <div className={classes.container}>
                    <GridContainer alignItems="center">
                        <GridItem sm={6}>
                            <img
                                src={aussieLogo}
                                alt="Aussie Green Klean logo"
                                className={
                                    classes.imgFluid + " " +
                                    classes.widthimg
                                }
                                />
                        </GridItem>
                        <GridItem sm={6}>
                            <div className={classes.text}>
                                <div className={classes.title}>
                                    <h2>About Us</h2>
                                </div>
                                <p>Here at Aussie Green Klean there are few things that we are passionate about. Customer service and all natural cleaning products. We are now accepting bookings online, all you need to do is lift a finger. We offer all ranges of cleans from residential home to large commercial jobs</p>
                                <p>Aussie Green Klean has a highly trained and dedicated team led by founder Garry Stephen, so you can rest easy knowing that your property is in good hands.</p>
                                <p>Feedback from customers is always positive and they love the clean results, the natural fragrance the product leaves behind, and love the fact that it was natural, environmentally friendly and 100% Australian.</p>
                            </div>
                            <div className={classes.buttonscont}>
                                <Button color="primary" round href="#contact">Book Residential</Button>
                                <Button color="info" round>Contact Commercial</Button>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(aboutUsStyle)(AboutUs)