import { title } from "assets/jss/material-kit-react.jsx";

const aboutUsStyle = {
    sections: {
        paddingTop: "50px"
    },
    title: {
        ...title,
    },
    placeHolder: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
    },
    imgContainer: {
        width: "200px",
        height: "200px",
        padding: "0",
        margin: "0 15px",
        '& img':{
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    },
    '@media (max-width: 700px)':{
        imgContainer:{
            width: "100px",
            height: "100px"
        }
    }
}

export default aboutUsStyle;