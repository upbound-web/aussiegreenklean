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
import vacCleaner from "assets/img/vac_cleaner.png"

class AboutUs extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sections}>
                <div className={classes.container}>
                    <GridContainer alignItems="center">
                        <GridItem sm={6}>
                            <img
                                src={vacCleaner}
                                alt="vacum cleaner"
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
                            </div>
                            <div className={classes.buttonscont}>
                                <Button color="primary" round>Book Residential</Button>
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