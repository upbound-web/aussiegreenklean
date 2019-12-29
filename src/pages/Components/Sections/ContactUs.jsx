import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
// style
import contactStyle from "assets/jss/material-kit-react/views/componentsSections/contactUsStyle.jsx";

class ContactSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="contact">
        <div className={classes.container}>
          <GridContainer justify="center" className={classes.nonBlur}>
            <GridItem cs={12} sm={12} md={8}>
              <h2 className={classes.title}>Contact Us</h2>
              <h4 className={classes.description}>
                If you havent found what you are looking for yet, or would like any info about the services we provide. Dont hesitate to get in contact Via the form, facebook or give us a call.
              </h4>
              <form name="contact" method="POST" data-netlify="true"> 
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Your Name"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Your Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <CustomInput
                    labelText="Your Message"
                    id="message"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.textArea
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                  <GridContainer justify="center">
                    <GridItem
                      xs={12}
                      sm={12}
                      md={4}
                      className={classes.textCenter}
                    >
                      <Button color="primary" type="submit">Send Message</Button>
                    </GridItem>
                  </GridContainer>
                </GridContainer>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(contactStyle)(ContactSection);
