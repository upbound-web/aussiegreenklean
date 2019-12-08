import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
//individual jss
import servicesStyle from "assets/jss/material-kit-react/views/componentsSections/servicesStyle.jsx";
//images
import vacCleaner from "assets/img/vac_cleaner.png"

class Services extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sections}>
                <div className={classes.container}>
                    <GridContainer alignItems="center">
                         <GridItem sm={6}>
                            <div className={classes.text}>
                                <div className={classes.title}>
                                    <h2>Services</h2>
                                </div>
                                <p>We offer lots of services. Ironing washing cleaning. Pretty much anything that you don't wanna do i will do for you.</p>
                            </div>
                            <div className={classes.buttonscont}>
                                <Button color="primary" round>Book Residential</Button>
                                <Button color="info" round>Contact Commercial</Button>
                            </div>
                        </GridItem>
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

                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(servicesStyle)(Services)