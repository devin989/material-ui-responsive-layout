import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/logo4.png';


function ElevationScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyle = makeStyles(theme => ({
    toolBarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3rem",
        [theme.breakpoints.down('md')]: {
            marginBottom: "1.5em"
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "1.25em"
        }
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1,
    },
    logo: {
        height: "7em",

        [theme.breakpoints.down('md')]: {
            height: "6em"
        },
        [theme.breakpoints.down('xs')]: {
            height: "5em"
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto",

    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
        // color: 	'#808080'
        color: '#424242'

    },
    button: {
        ...theme.typography.hire,
        marginLeft: "25px",
        marginRight: "75px",
        borderRadius: "10px",
        height: "35px",
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        }
    },
    menu: {
        backgroundColor: theme.palette.common.LightOrange,
        color: "white",

    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.LightOrange
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7
    },
    drawerItemHire: {
        backgroundColor: theme.palette.common.LightOrange
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        }

    }
}))

const Header = (props) => {
    const classes = useStyle();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const tabSelectHandler = (e, value) => {
        setValue(value);
    };

    const handleClick = (e) => {
        console.log(e.currentTarget);
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }
    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const menuOptions = [{name: "Services", link: "/services"}, {
        name: "Mobile App Development",
        link: "/mobileapps"
    }, {name: "Web App Development", link: "/webapps"}, {name: "UI/UX Design", link: "/uiux"}];

    const routes = [{name: "Home", link: "/", activeIndex: 0}, {name: "About", link: "/about", activeIndex: 1}, {
        name: "Services",
        link: "/services"
        , activeIndex: 2
    }, {name: "Contact", link: "/contact", activeIndex: 3}]

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0)
                }
                break;
            case "/about":
                if (value !== 1) {
                    setValue(1)
                }
                break;
            case "/service":
                if (value !== 2) {
                    setValue(2);
                    setSelectedIndex(0);
                }
                break;
            case "/mobileapps":
                if (value !== 2) {
                    setValue(2);
                    setSelectedIndex(1);
                }
                break;
            case "/webapps":
                if (value !== 2) {
                    setValue(2);
                    setSelectedIndex(2);
                }
                break;
            case "/uiux":
                if (value !== 2) {
                    setValue(2);
                    setSelectedIndex(3);
                }
                break;
            case "/contact":
                if (value !== 3) {
                    setValue(3);
                }
                break;
            default:
                break;
        }


    }, [value]);

    const tabs = (
        <React.Fragment>
            <Tabs value={value} onChange={tabSelectHandler} className={classes.tabContainer}
                  TabIndicatorProps={{style: {backgroundColor: "white"}}}>
                <Tab className={classes.tab} component={Link} to={"/"} label={"Home"}/>
                <Tab className={classes.tab} component={Link} to={"/about"} label={"About"}/>
                <Tab className={classes.tab} component={Link} to={"/services"}
                     onMouseOver={(e) => handleClick(e)} label={"Services"}/>
                <Tab className={classes.tab} component={Link} to={"/contact"} label={"Contact"}/>
            </Tabs>
            <Button variant={'contained'} color={'secondary'} className={classes.button}>
                Hire me
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{paper: classes.menu}}
                MenuListProps={{onMouseLeave: handleClose}}
                elevation={0}
                style={{zIndex:1302}}
                keepMounted
            >
                {menuOptions.map((option, i) => (
                    <MenuItem key={`${option}${i}`} onClick={(event) => {
                        handleMenuItemClick(event, i);
                        setValue(2);
                        handleClose(event)
                    }} selected={i === selectedIndex && value === 2} component={Link}
                              to={option.link} classes={{root: classes.menuItem}}>{option.name}</MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer}
                             onClose={() => setOpenDrawer(
                                 false
                             )} onOpen={() => setOpenDrawer(true)} classes={{paper: classes.drawer}}>
                <div className={classes.toolBarMargin}/>
                <List disablePadding>
                    {routes.map((routes, index) => (
                        <ListItem key={index} divider button component={Link} to={routes.link}
                                  selected={value === routes.activeIndex}
                                  classes={{selected: classes.drawerItemSelected}} onClick={() => {
                            setOpenDrawer(false);
                            setValue(routes.activeIndex)
                        }}>
                            <ListItemText
                                className={classes.drawerItem}
                                disableTypography>{routes.name}</ListItemText>
                        </ListItem>
                    ))}
                    <ListItem divider button classes={{root: classes.drawerItemHire,selected: classes.drawerItemSelected}}
                              onClick={() => {
                                  setOpenDrawer(false);
                              }}>
                        <ListItemText
                            className={classes.drawerItem}
                            disableTypography>Hire me</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple
                        className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar style={{background: '#FFFFFF'}} position={"fixed"} className={classes.appbar}>
                    <Toolbar disableGutters={true}>
                        <Button component={Link} to={'/'} className={classes.logoContainer} disableRipple
                                onClick={() => setValue(0)}>
                            <img alt={"company logo"} className={classes.logo} src={logo}/>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin}/>
        </React.Fragment>
    );
};

export default Header;
