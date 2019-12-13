import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
//import GridContainer from "components/Grid/GridContainer.jsx";
//import GridItem from "components/Grid/GridItem.jsx";
//import Button from "components/CustomButtons/Button.jsx";
//individual jss
import servicesStyle from "assets/jss/material-kit-react/views/componentsSections/servicesStyle.jsx";
//images
import cleaningImg from "assets/img/clean.jpg"
import residentialImg from "assets/img/residential_clean.jpg"
import commercialImg from "assets/img/commercial_clean.jpg"
import ironing from "assets/img/washing_clean.jpg"


class Services extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sections} id="services">
                    <div className={classes.cardContainer}>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={residentialImg} 
                                    alt="Residential Clean"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>Residential Cleaning</h2>
                                    <p>Lorem ipsum dolor, sat amet consectetur adipisicing elit. Aut vitae temporibus tenetur, iusto at blanditiis, animi aliquam eaque quos, dolor aspernatur voluptas laboriosam. Ad fugiat ex, labore libero eos sequi!</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={commercialImg} 
                                    alt="services1"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>Builders Clean</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut vitae temporibus tenetur, iusto at blanditiis, animi aliquam eaque quos, dolor aspernatur voluptas laboriosam. Ad fugiat ex, labore libero eos sequi!</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={ironing} 
                                    alt="services1"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>Ironing and Washing</h2>
                                    <p>We offer lots of services they include x, y and z. What are your thoughts can you do it?</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={cleaningImg} 
                                    alt="services1"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>Commercial Cleaning</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut vitae temporibus tenetur, iusto at blanditiis, animi aliquam eaque quos, dolor aspernatur voluptas laboriosam. Ad fugiat ex, labore libero eos sequi!</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default withStyles(servicesStyle)(Services)