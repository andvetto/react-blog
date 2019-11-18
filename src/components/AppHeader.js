import React from 'react';
import {AppBar, Toolbar, Typography}  from '@material-ui/core';
import NavBar from './NavBar';

class AppHeader extends React.Component{
/*
    constructor(props) {
        super(props);
    }
*/

    render(){
        return(
            <AppBar position="static">
                <Toolbar>
                    <Typography color="inherit">
                        <strong>My React App</strong>
                    </Typography>
                    <NavBar gestisciTema={this.props.gestisciTema} />
                </Toolbar>
            </AppBar>
        );
    }
} 
export default AppHeader;