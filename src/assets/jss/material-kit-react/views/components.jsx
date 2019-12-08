import { container } from "assets/jss/material-kit-react.jsx";

const componentsStyle = {
  container,
  brand: {
    color: "#2F4F4F",
    textAlign: "left",
    maxWidth: "50%"
  },
  '@media (max-width: 700px)':{
    brand:{
      maxWidth: "100%"
    }
  },
  title: {
    fontSize: "4rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  '@media (max-width: 700px)':{
    title:{
      fontSize: "2.5rem"
    }
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0",
    textAlign: "left"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  bookbtn: {
    margin: "25px 0 0"
  },
  mainRaised: {
    margin: "-100px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  koalaImg: {
    height: "100px",
    position: "absolute",
    top: "-5rem",
    left: "25%"
  }
};

export default componentsStyle;
