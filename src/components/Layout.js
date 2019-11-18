import React from 'react';
import {CssBaseline}  from '@material-ui/core';
import {Route}  from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
//import NotFound from '../pages/NotFound';
import Article from '../pages/Article';
import Contact from '../pages/Contact';
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../config/theme';

class Layout extends React.Component{

    constructor(props) {
        super(props);
        this.gestisciTema = this.gestisciTema.bind(this);
        this.state = {
            haveTheme: true
        };
    }

    gestisciTema(){
        if(this.state.haveTheme === true){
            this.setState({ haveTheme: false });
        } else{
            this.setState({ haveTheme: true });
        }
        
    }

    render(){
        console.log(this.state);
        return (
            
            <div>
                <CssBaseline />
                <MuiThemeProvider theme={theme}>
                <AppHeader gestisciTema={this.gestisciTema} />
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/:id" component={Article} />
                    <Route exact path="/contact" component={Contact} />
                </main>
                <AppFooter />
                </MuiThemeProvider>

            </div>
        )
    }
}


export default Layout;