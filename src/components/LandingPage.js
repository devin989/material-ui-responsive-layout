import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import BackdropImage from "../assets/man.jpeg";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import revolutionBackground from '../assets/repeatingBackground.svg';


const useStyle = makeStyles(theme => ({
    backDropImage: {
        // position: "relative",
        width: 900,
        [theme.breakpoints.down('xs')]: {
            maxWidth: 500
        }


    },
    hireButton: {
        ...theme.typography.hire,
        backgroundColor: theme.palette.common.LightOrange,
        height: 45,
        width: 145,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        marginRight: 40,

    },
    buttonContainer: {
        marginTop: "2em"
    },
    learnButton: {
        borderColor: theme.palette.common.Blue,
        color: theme.palette.common.Blue,
        height: 45,
        width: 145,
        borderWidth: 2,
        textTransform: "none",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "0.9rem"
    },
    nameContainer: {
        marginBottom: "3em",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "2em",
        },
        marginLeft: "5em",

    },
    descriptionContainer: {
        marginLeft: "5em",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "2em",
        },

    },
    revolutionCard: {
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "1em",
        minWidth:300,
        maxWidth:400,
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%"
        }
    },
    aboutContainer: {
        // marginLeft:"5em",
        // marginRight:"10em"
        marginTop: "10em"
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
}));

const LandingPage = (props) => {
    const classes = useStyle();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


    return (
        <Grid container direction={"column"}>
            <Grid item>
                <Grid container justify={matchesSM ? "center" : "flex-end"} alignItems={"center"} direction={"row"}>
                    <Grid item sm>
                        <Grid container direction={"column"}>
                            <Grid item sm className={classes.nameContainer}>
                                <Typography variant={"h2"}>BSc. IT Undergraduate<br/>ABC</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={"subtitle1"} className={classes.descriptionContainer}>Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis
                                    orci a.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction={"row"} justify={"center"}
                                      className={classes.buttonContainer}>
                                    <Grid item>
                                        <Button variant={'contained'} className={classes.hireButton}>Hire Me</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant={'outlined'} className={classes.learnButton}><span
                                            style={{marginRight: 8}}>Learn More</span>
                                            <ButtonArrow width={15} height={15} fill={"red"}/></Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm>
                        <img src={BackdropImage} alt={"backdrop image"} className={classes.backDropImage}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                {/*--About me block--*/}
                <Grid
                    container
                    style={{height: "30em"}}
                    alignItems="center"
                    direction="row"

                >
                    <Grid
                        item
                        container
                        style={{
                            textAlign: matchesXS ? "center" : "inherit"
                        }}
                        direction={matchesXS ? "column" : "row"}
                    >
                        <Grid
                            item
                            sm
                            style={{marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em"}}
                        >
                            <Grid
                                container
                                style={{marginBottom: matchesXS ? "10em" : 0}}
                                direction="column"
                            >
                                <Typography variant={"h3"}>Designing With Passion While Exploring The
                                    World.</Typography>
                                <Typography variant={"subtitle1"}>Consectetur adipiscing elit, sed do eiusmod tempor
                                    ididunt ut
                                    labore
                                    et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd
                                    dho
                                    eiusmod tempor maecenas accumsan lacus.</Typography>
                                <Typography variant={"subtitle1"}>Consectetur adipiscing elit, sed do eiusmod tempor
                                    ididunt ut
                                    labore
                                    et dolore magna aliqua.</Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            sm
                            style={{
                                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                                textAlign: matchesXS ? "center" : "right"
                            }}
                        >
                            <Grid container direction="column">
                                <Typography variant={"h3"}>Any Type Of Query
                                    & Discussion.</Typography>
                                <Typography variant={"h6"}>Late talk with me</Typography>
                                <Typography variant={"h3"}>example@gmail.com <span
                                    style={{marginLeft: 10, marginTop: 100}}> <ButtonArrow width={50} height={50}
                                                                                           fill={"black"}/></span></Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/*--Technology Block--*/}
                <Typography variant={"h3"}>What Services you will Get from me!</Typography>
                <Grid
                    container
                    style={{height: "60em", }}
                    alignItems="center"
                    justify="center"
                    spacing={4}
                >
                    <Grid item>

                        <Card className={classes.revolutionCard}>
                            <CardContent>
                                <Grid
                                    container
                                    direction="column"
                                    style={{textAlign: "center"}}
                                >
                                    <Grid item>
                                        <Typography variant="h3" gutterBottom>
                                            The Revolution
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                            Visionary insights coupled with cutting-edge technology is a
                                            recipe for revolution.
                                        </Typography>

                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>

                        <Card className={classes.revolutionCard}>
                            <CardContent>
                                <Grid
                                    container
                                    direction="column"
                                    style={{textAlign: "center"}}
                                >
                                    <Grid item>
                                        <Typography variant="h3" gutterBottom>
                                            The Revolution
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                            Visionary insights coupled with cutting-edge technology is a
                                            recipe for revolution.
                                        </Typography>

                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>

                        <Card className={classes.revolutionCard}>
                            <CardContent>
                                <Grid
                                    container
                                    direction="column"
                                    style={{textAlign: "center"}}
                                >
                                    <Grid item>
                                        <Typography variant="h3" gutterBottom>
                                            The Revolution
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                            Visionary insights coupled with cutting-edge technology is a
                                            recipe for revolution.
                                        </Typography>

                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    );
}

export default LandingPage;