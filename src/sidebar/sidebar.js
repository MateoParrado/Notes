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
        
        //ensure that notes isnt null
        if(notes){
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
                        <Button 
                            className={classes.newNoteSubmitBtn}
                            onClick={this.newNote}>Submit Note
                        </Button>
                    </div> :
                    null
                }
                <List>
                {
                    //create the list of note titles on the sidebar
                    notes.map((_note, _index) => {
                    return(
                        <div key={_index}>
                        <SidebarItem
                            _note={_note}
                            _index={_index}
                            selNoteInd={selNoteInd}
                            selectNote={this.selectNote}
                            deleteNote={this.deleteNote}>
                        </SidebarItem>
                        <Divider></Divider>
                        </div>
                    )
                    })
                }
                </List>
            </div>);
        }
        //else return an empty div (should never really happen)
        return(<div></div>);
    }

    newNoteClick = () =>{
        this.setState({addingNote: !this.state.addingNote, title: null});
    }

    newNote = () => {
        
    }

    updateTitle = (txt) => {
        this.setState({title: txt});
    }

    selectNote = (note, index) => this.props.selectNote(note, index);

    deleteNote = () => {
        
    }
}

export default withStyles(styles)(Sidebar);