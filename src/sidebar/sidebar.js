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
        this.state = {
            addingNote: false,
            title: null
        };
    }

    render(){
        const { notes, classes, selNoteInd } = this.props;

        return(
        <div className = {classes.sidebarContainer}>
            <Button
              onClick = {this.newNoteClick}
              className = {classes.newNoteBtn}>
                {
                    this.state.addingNote ? 'Cancel' : 'New Note'
                }
            </Button>
            {
                this.state.addingNote ? 
                <div>
                    <input type='text'
                        className={classes.newNoteInput}
                        placeholder='Enter note title'
                        onKeyUp={(e) => this.updateTitle(e.target.value)}>
                    </input>
                </div> :
                null
            }
        </div>);
    }

    newNoteClick = () =>{
        this.setState({addingNote: !this.state.addingNote, title: null});
    }

    updateTitle = (txt) => {

    }
}

export default withStyles(styles)(Sidebar);