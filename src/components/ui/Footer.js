import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import footerLogo from '../../assets/footerLogo.png';
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Facebook from '../../assets/fblogo2.png';
import Instagram from '../../assets/instaLogo2.png';
import Linkedin from '../../assets/linkedInLogo.png';
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyle = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.Blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    footerLogo: {
        height: "6em",
        width: "10em",
        [theme.breakpoints.down('md')]: {
            height: "5em",
            width: "8em"
        }
    },
    link: {
        color: "white",
        fontSize: "2em",
        fontFamily: "Open sans",
        fontWeight: "bold",
        textDecoration: "none"

    },
    address: {
        color: "white",
        fontFamily: "Open sans",
        fontSize: "1em",

    },
    icon:{
        height:"3em",
        width:"3em",
        [theme.breakpoints.down('xs')]: {
            height:"1.5em",
            width:"1.5em",
        }

    },
    socialContainer:{
        position:"absolute",
        marginTop:"-3.5em",
        right:"1em",
            [theme.breakpoints.down('xs')]: {
                right:"0.6em",
                marginTop:"-2em",
            }
    }
}));

const Footer = (props) => {
    const classes = useStyle();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <footer className={classes.footer}>

            <Grid container direction={"column"} alignItems={[matches?null:"center"]} spacing={2}>
                <Grid item>
                    <img alt={"footer img"} src={footerLogo} className={classes.footerLogo}/>
                </Grid>
                <Hidden mdDown>
                    <Grid item component={Link} to={'/contact'} className={classes.link}>
                        example@gmail.com
                    </Grid>
                    <Grid item>
                        <Grid container direction={"column"}>
                            <Grid item className={classes.address}>address</Grid>
                            <Grid item className={classes.address}>address</Grid>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid container justify={"flex-end"} spacing={1} className={classes.socialContainer}>
                <Grid item component={"a"} href={''} rel={"noopener noreferrer"} target={"_blank"}>
                    <img alt={"fb logo"} src={Facebook} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href={''} el={"noopener noreferrer"} target={"_blank"}>
                    <img alt={"insta logo"} src={Linkedin} className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href={''} el={"noopener noreferrer"} target={"_blank"}>
                    <img alt={"insta logo"} src={Instagram} className={classes.icon} />
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;