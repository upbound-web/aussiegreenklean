
const aboutUsStyle = {
    sections: {
        paddingTop: "75px"
    },
    cardContainer: {
        position: "relative",
        width: "100%",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    },
    card:{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "70px 0",
        '&:nth-child(odd)':{
            flexDirection: "row"
        },
        '&:nth-child(even)':{
            flexDirection: "row-reverse",
            textAlign: "right",
            '& $imgbx':{
                left: "-25px",
            },
            '& $contentbx':{
                right: "-25px",
                padding: "20px 100px 20px 60px"
            }
        },

    },
    imgbx: {
        position: "relative",
        width: "500px",
        height: "400px",
        left: "25px",
        zIndex: "1",
        '& img':{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }
    },
    contentbx: {
        position: "relative",
        right: "25px",
        width: "500px",
        height: "400px",
        background: "#2F4F4F",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 60px 20px 100px",
        '&:before':{
            content: "''",
            position: "absolute",
            top: "-30px",
            bottom: "-30px",
            left: "0",
            right: "0",
            background: "#2F4F4F",
            zIndex: "-1"
        }
    },
    content: {
        color: "#fff",
        '& h2': {
            marginTop: "0px",
            lineHeight: "1em"
        },
        '& p': {
            marginTop: "10px"

        }
    },
    '@media (max-width: 1063px)':{
        cardContainer:{
            alignItems: "normal",
            justifyContent: "space-around"
        },
        card:{
            flexDirection: "column",
            maxWidth: "350px",
            height: "auto",
            margin: "25px 0px",
            '&:nth-child(even)':{
                flexDirection:"column",
                '& $imgbx':{
                    left: "0px"
                },
                '& $contentbx':{
                    right: "0",
                    padding: "30px"
                }
            },
            '&:nth-child(odd)':{
                flexDirection: "column"
            }
        },
        imgbx:{
            width:"100%",
            height: "250px",
            left: "0"
        },
        contentbx:{
            width:"100%",
            flex: "1",
            height: "100%",
            right: "0",
            padding: "30px",
            textAlign: "center",
            '&:before':{
                top: "0",
                bottom: "0",

            }
        }
    },
    header:{
        textAlign: "center",
    },
    desc:{
        margin: "0 auto",
        textAlign: "center",
        maxWidth: "700px",
        padding: "0 30px"
    }
}

export default aboutUsStyle;