import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../sidebarItem/sidebarItem';

//handles showing the names of the notes on the sidebar
class Sidebar extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(<div>sidebar</div>);
    }
}

export default withStyles(styles)(Sidebar);