import { title } from "assets/jss/material-kit-react.jsx";
import { container } from "assets/jss/material-kit-react.jsx";

//import backgroundimg from "assets/img/residential_clean.jpg"
//import zIndex from "@material-ui/core/styles/zIndex";

const workStyle = {
  section: {
    padding: "100px 0",
    background: "#EEE"
  },
  container,
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
