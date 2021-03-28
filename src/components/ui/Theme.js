import {createMuiTheme} from '@material-ui/core/styles';

const DevBlue = "#111d5e"
const DevLightOrange = "#ff9100";
export default createMuiTheme({
    palette: {
        common: {
            Blue: `${DevBlue}`,
            LightOrange: `${DevLightOrange}`

        },
        primary:{
            main:`${DevBlue}`
        },
        secondary:{
            main:`${DevLightOrange}`
        },

    },
    typography:{
        tab:{
            fontFamily:"Raleway",
            textTransform:"none",
            fontWeight:700,
            fontSize:"1rem",
        },
        hire:{
            fontFamily:"Pacifico",
            color:"white",
            fontSize:"1em",
            textTransform:"none",
        },
        h2:{
            fontFamily:"Raleway",
            fontWeight:700,
            fontSize:"3rem",
            color:DevBlue,
           lineHeight:1.5
        },
        h3:{
            fontFamily:"Raleway",
            fontWeight:700,
            fontSize:"2.5rem",
            color:DevBlue,
            lineHeight:1.5
        },
        h4:{
            fontFamily:"Raleway",
            fontWeight:700,
            fontSize:"2rem",
            color:DevBlue,
            lineHeight:1.5
        },
        subtitle1:{
            lineHeight:2.5
        }

    }
})