import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
//import GridContainer from "components/Grid/GridContainer.jsx";
//import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
//individual jss
import servicesStyle from "assets/jss/material-kit-react/views/componentsSections/servicesStyle.jsx";
//images
import domesticImg from "assets/img/domestic.jpeg";
import commercialImg from "assets/img/commercial_clean.jpeg";
import ironingImg from "assets/img/ironing.jpeg";
import mowingImg from "assets/img/mowing.jpeg";
import buildersImg from "assets/img/builders_clean.jpeg";
import windowsImg from "assets/img/window_clean.jpeg";
import rubbishImg from "assets/img/rubbish.jpeg";
import solarImg from "assets/img/solar.jpeg";
import leaseImg from "assets/img/lease_clean.jpeg";


class Services extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sections} id="services">
                    <div className={classes.cardContainer}>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={domesticImg} 
                                    alt="Domestic Clean"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>Domestic Cleaning</h2>
                                    <p>Lorem ipsum dolor, sat amet consectetur adipisicing elit. Aut vitae temporibus tenetur, iusto at blanditiis, animi aliquam eaque quos, dolor aspernatur voluptas laboriosam. Ad fugiat ex, labore libero eos sequi!</p>
                                    <Button color= "primary"> Book Now </Button>
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
                                    <h2>Commercial Clean</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut vitae temporibus tenetur, iusto at blanditiis, animi aliquam eaque quos, dolor aspernatur voluptas laboriosam. Ad fugiat ex, labore libero eos sequi!</p>
                                    <Button color= "primary"> Book Now </Button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={ironingImg} 
                                    alt="services1"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>Ironing and Washing</h2>
                                    <p>We offer lots of services they include x, y and z. What are your thoughts can you do it?</p>
                                    <Button color= "primary"> Book Now </Button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={mowingImg} 
                                    alt="services1"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>Mowing and Garden Maintenance</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut vitae temporibus tenetur, iusto at blanditiis, animi aliquam eaque quos, dolor aspernatur voluptas laboriosam. Ad fugiat ex, labore libero eos sequi!</p>
                                    <Button color= "primary"> Book Now </Button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={buildersImg} 
                                    alt="services1"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>Builders Clean</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut vitae temporibus tenetur, iusto at blanditiis, animi aliquam eaque quos, dolor aspernatur voluptas laboriosam. Ad fugiat ex, labore libero eos sequi!</p>
                                    <Button color= "primary"> Book Now </Button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={windowsImg} 
                                    alt="services1"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>Proffesional Window Clean</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut vitae temporibus tenetur, iusto at blanditiis, animi aliquam eaque quos, dolor aspernatur voluptas laboriosam. Ad fugiat ex, labore libero eos sequi!</p>
                                    <Button color= "primary"> Book Now </Button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={rubbishImg}
                                    alt="services1"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>Rubbish Removal</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut vitae temporibus tenetur, iusto at blanditiis, animi aliquam eaque quos, dolor aspernatur voluptas laboriosam. Ad fugiat ex, labore libero eos sequi!</p>
                                    <Button color= "primary"> Book Now </Button>    
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={solarImg}
                                    alt="services1"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>Solar Panel Clean</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut vitae temporibus tenetur, iusto at blanditiis, animi aliquam eaque quos, dolor aspernatur voluptas laboriosam. Ad fugiat ex, labore libero eos sequi!</p>
                                    <Button color= "primary"> Book Now </Button>    
                                </div>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.imgbx}>
                                <img
                                    src={leaseImg}
                                    alt="services1"
                                />
                            </div>
                            <div className={classes.contentbx}>
                                <div className={classes.content}>
                                    <h2>End of Lease Clean</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut vitae temporibus tenetur, iusto at blanditiis, animi aliquam eaque quos, dolor aspernatur voluptas laboriosam. Ad fugiat ex, labore libero eos sequi!</p>
                                    <Button color= "primary"> Book Now </Button>    
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>
        );
    }
}

export default withStyles(servicesStyle)(Services)