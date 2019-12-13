import { container, title } from "assets/jss/material-kit-react.jsx";

const aboutUsStyle = {
    sections: {
        paddingTop: "100px"
    },
    container,
    title: {
        ...title,
    },
    widthimg: {
        width: "100%"
    },
    buttonscont: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    }
}

export default aboutUsStyle;