import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import './css/App.css';

import Header from "./components/Header/Header.component";
import Home from "./pages/Home/Home.page";
import {ContentWrapper, MainContent, SectionsGroup} from "./App.styles";
import Work from "./pages/Work/Work.page";
import Footer from "./components/Footer/Footer.component";
import Bio from "./pages/Bio/Bio.page";

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Header/>
                <MainContent>
                    <ContentWrapper>
                        <SectionsGroup>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route exact path='/work' component={Work}/>
                                <Route exact path='/bio' component={Bio}/>
                            </Switch>
                            <Footer/>
                        </SectionsGroup>
                    </ContentWrapper>
                </MainContent>
            </div>
        );
    }
}

export default App;
