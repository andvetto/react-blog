import React from 'react';
import {List, ListItem, ListItemText, Typography}  from '@material-ui/core';
import { NavLink } from 'react-router-dom';


class NavBar extends React.Component{
/*
    constructor(props) {
        super(props);
    }
*/
    render(){
        return(
            <List component="nav">
                <ListItem component="span">
                    <ListItemText inset>
                        <Typography color="inherit">
                            <NavLink to="/" style={{ textDecoration:'none', color:'inherit'}}>Home</NavLink>
                        </Typography>
                    </ListItemText>

                    <ListItemText inset>
                        <Typography color="inherit">
                            <NavLink to="/blog" style={{ textDecoration:'none', color:'inherit'}}>Blog</NavLink>
                        </Typography>
                    </ListItemText>

                    <ListItemText inset>
                        <Typography color="inherit">
                            <NavLink to="/contact" style={{ textDecoration:'none', color:'inherit'}}>Contact</NavLink>
                        </Typography>
                    </ListItemText>  

                    <ListItemText inset>
                        <Typography color="inherit">
                            <span onClick={this.props.gestisciTema}>Togli tema</span>
                        </Typography>
                    </ListItemText>   
                    
                </ListItem>
            </List>
        )
    }
}

export default NavBar;