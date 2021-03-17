import {createMuiTheme} from '@material-ui/core/styles';

const DevOrange = "#ff5722"
const DevLightOrange = "#ff9100";
export default createMuiTheme({
    palette: {
        common: {
            DevOrange: `${DevOrange}`,
            DevLightOrange: `${DevLightOrange}`

        },
        primary:{
            main:`${DevOrange}`
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
        }
    }
})