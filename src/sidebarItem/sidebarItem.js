import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';

//handles showing the names of the notes on the sidebar
class SidebarItem extends React.Component {
  render() {
    const { _index, _note, classes, selNoteInd } = this.props;

    //return a list item with the primary being the title and the secondary being the first thirty chars of the body
    //selected if the selected note's index is this note's index
    return (
      <div key={_index}>
        <ListItem
          className={classes.listItem}
          selected={selNoteInd === _index}
          alignItems='flex-start'>
          <div
            className={classes.textSection}
            onClick={() => this.selectNote(_note, _index)}>
            <ListItemText
              classes={{ secondary:  classes.second}}
              primary={_note.title}
              secondary={
                removeHTMLTags(_note.body.substring(0, 30)) + (_note.body.length > 30 ? '...' : '')
              }></ListItemText>
          </div>
          <DeleteIcon onClick={() => this.deleteNote(_note)}
            className={classes.deleteIcon}></DeleteIcon>
        </ListItem>
      </div>
    );
  }

  selectNote = (note, index) => this.props.selectNote(note, index);
  deleteNote = (note) => {
    if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      this.props.deleteNote(note);
    }
  }
}

export default withStyles(styles)(SidebarItem);