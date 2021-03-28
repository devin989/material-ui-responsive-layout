import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import theme from './ui/Theme';
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./LandingPage";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={LandingPage}/>
                    <Route exact path={"/about"} component={() => <div>about</div>}/>
                    <Route exact path={"/services"} component={() => <div>services</div>}/>
                    <Route exact path={"/mobileapps"} component={() => <div>mobile</div>}/>
                    <Route exact path={"/webapps"} component={() => <div>web</div>}/>
                    <Route exact path={"/uiux"} component={() => <div>Ui Ux</div>}/>
                    <Route exact path={"/contact"} component={() => <div>contact</div>}/>
                    <Route exact path={"/hire"} component={() => <div>hire</div>}/>

                </Switch>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
