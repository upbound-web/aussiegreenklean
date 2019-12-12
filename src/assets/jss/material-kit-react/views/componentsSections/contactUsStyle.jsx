import { title } from "assets/jss/material-kit-react.jsx";

import background from "assets/img/residential_clean.jpg"
//import zIndex from "@material-ui/core/styles/zIndex";

const workStyle = {
  section: {
    padding: "70px 0",
    '&:before':{
    backgroundImage: "url(" + background +")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: "blur(8px)"
    }
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center",
  },
  nonBlur:{
    zIndex:"2"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
};

export default workStyle;
