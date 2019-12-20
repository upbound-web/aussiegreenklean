import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
//individual jss
import iconBannerStyle from "assets/jss/material-kit-react/views/componentsSections/iconBannerStyle.jsx";
//images
import aussieImg from "assets/img/australia.svg";
import ndisImg from "assets/img/ndis_approved.png";
import allNaturalImg from "assets/img/all_natural.png"

class IconBanner extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sections}>
                <div className={classes.container}>
                    <GridContainer className={classes.placeHolder}>
                        <GridItem sm={4} className={classes.imgContainer}>
                            <img
                                src={allNaturalImg}
                                alt="Australia Map"
                                className={
                                    classes.imgFluid + " " +
                                    classes.widthimg
                                }
                            />
                        </GridItem>
                        <GridItem sm={4} className={classes.imgContainer}>
                        <img
                                src={aussieImg}
                                alt="Australia Map"
                                className={
                                    classes.imgFluid + " " +
                                    classes.widthimg
                                }
                        />
                        </GridItem>
                        <GridItem sm={4} className={classes.imgContainer}>
                        <img
                                src={ndisImg}
                                alt="Australia Map"
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

export default withStyles(iconBannerStyle)(IconBanner)