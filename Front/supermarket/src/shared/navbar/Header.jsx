import React, { Component } from 'react'
import { Typography, Toolbar, AppBar } from '@material-ui/core';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Racks Market
                    </Typography>
                </Toolbar>
            </AppBar>

        );
    }
}

export default Header;