import React from 'react';
import {AppBar, Toolbar, Typography, ListItem, ListItemText}  from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';

const AppFooter = () => (
    <AppBar position="static" color="secondary">
        <Toolbar>
            <ListItem component="span">
                <ListItemText inset>
                    <Typography variant="inherit" color="inherit">
                        <SocialIcon url="https://twitter.com" target="_blank" size={32} round={true} />
                    </Typography>
                </ListItemText> 
                <ListItemText inset>
                    <Typography variant="inherit" color="inherit">
                        <SocialIcon url="https://facebook.com" target="_blank" size={32} round={true} />
                    </Typography>
                </ListItemText> 
                <ListItemText inset>
                    <Typography variant="inherit" color="inherit">
                        <SocialIcon url="https://instagram.com" target="_blank" size={32} round={true} />
                    </Typography>
                </ListItemText>   
                <ListItemText inset>
                    <Typography variant="inherit" color="inherit">
                        <SocialIcon url="https://pinterest.com" target="_blank" size={32} round={true} />
                    </Typography>
                </ListItemText>   
                
            </ListItem>
        </Toolbar>
    
    </AppBar>
);

export default AppFooter;