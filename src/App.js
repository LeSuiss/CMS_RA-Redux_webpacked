import React, {useContext} from 'react';
import './scss/App.scss';
import 'semantic-ui-css/semantic.min.css'

import Router from './components/Router'
import {WebSiteConfig} from './components/ressources/useConfig'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
//import color from './scss/abstracts/_variables.scss'


function App() {


    return (
       <> 
        <div className="App" >
            <WebSiteConfig>
                
                <Header/>
                    <div id="mainContainer">
                        <Router/>
                    </div>
                <Footer/> 

            </WebSiteConfig>
        </div>
    
    </>)
}

export default App;