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
import domesticImg from "assets/img/domestic.jpg";
import commercialImg from "assets/img/commercial_clean.jpg";
import ironingImg from "assets/img/ironing.jpg";
import mowingImg from "assets/img/mowing.jpg";
import buildersImg from "assets/img/builders_clean.jpg";
import windowsImg from "assets/img/window_clean.jpg";
import rubbishImg from "assets/img/rubbish.jpg";
import solarImg from "assets/img/solar.jpg";
import leaseImg from "assets/img/lease_clean.jpg";


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
                                    <p>Have one of our highly skilled team come out to your home and give you a professional clean leaving the home sparkling. </p>
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
                                    <p>Have one of our fast and efficient team come to your office or work site to get it sparkling, from spring cleans to regular cleaning services we have you covered.</p>
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
                                    <p>Need ironing, washing, changing the sheets, making beds? Any sort of house keeping to make your life simpler. Let us take care of it for you</p>
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
                                    <p>Mowing, weeding, pruning, wiper snipping, green waste removed. A regular service or just the once</p>
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
                                    <p>Builders / Contractors need your site cleaned to handover to the owner? A home, block of units or major construction, we hand your site over to your customers requirements.</p>
                                    <Button 
                                    href= "https://book.servicem8.com/request_service_booking?strVendorUUID=f588290e-1fea-44d5-b231-2dfe4adc487b#86fa7014-e2ec-4587-b230-422c96feda7b" 
                                    color= "primary"> Book Now </Button>
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
                                    <p>Have one of our highly skilled team come out to your home or office & give your windows a professional clean leaving them sparkling. </p>
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
                                    <p>We remove rubbish, whatever you need gone we will remove it for you. We will take care of everything for you.</p>
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
                                    <p>You often wont realise how dirty your solar pannels are and the effect that can have on their efficiency. Let us make sure they are sparkling and working at maximum efficiency</p>
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
                                    <p>Want to make sure your place is sparkling before you hand the keys back to the rental agent. Dont risk it. Book us in to take care of it for you.</p>
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