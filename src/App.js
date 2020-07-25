import React from 'react';
import './App.css';
import Sidebar from './sidebar/sidebar'
import Editor from './editor/editor'

const firebase = require("firebase");

class App extends React.Component {


  constructor() {
    super();

    this.state = {
      selNotInd: null,
      selNote: null,
      notes: null
    };
  }

  render() {
    return (
      <div className="api-container">
        <Sidebar
          selNoteInd={this.state.selNoteInd}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
          removeNote={this.removeNote}>
        </Sidebar>
        {
          this.state.selNote ?
            <Editor selNote={this.state.selNote}
              selNoteInd={this.state.selNoteInd}
              notes={this.state.notes}
              noteUpdate={this.noteUpdate}>
            </Editor> :
            <div className="no-note-sel">
              <center className='no-note-msg'>Select a note</center>
            </div>
        }
      </div>
    );
  }

  //called once when the component is mounted
  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes")
      //gets called whenever db is updated
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ notes: notes });
      });

  }

  //called when note is selected from sidebar
  selectNote = (note, index) => this.setState({ selNoteInd: index, selNote: note });

  //called when note body is changed
  noteUpdate = (id, note) => {
    firebase
      .firestore()
      .collection('notes')
      .doc(id)
      .update({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  }

  newNote = async (title) => {

    const note = {
      title: title,
      body: ''
    };

    //tell firebase to make a new note for us
    const newFromDB = await firebase
      .firestore()
      .collection('notes')
      .add({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

    //get this note's id
    const newID = newFromDB.id;

    await this.setState({ notes: [...this.state.notes, note] });

    //find index of this new note
    const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id === newID)[0]);

    //set our state to focus on it
    this.setState({ selNote: this.state.notes[newNoteIndex], selNotInd: newNoteIndex });
  }

  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);

    //remove it from the notes list
    await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });

    //only do this is we've selected something
    if (this.state.selNotInd) {
      //if we delete our current note, unfocus it
      if (this.state.selNoteInd === noteIndex) {
        this.setState({ selNoteInd: null, selNote: null });
      }
      //else, shift our array position down by one (because it is now one shorter)
      else {
        //if our length is less than one just unfocus
        if (this.state.notes.length < 1) {
          this.setState({ selNoteInd: null, selNote: null });
        }
        //otherwise, if we deleted a note before ours we're going to have to move down one to adjust
        else if (noteIndex < this.state.selNotInd) {
          this.selectNote(this.state.notes[this.state.selNoteInd - 1], this.state.selNoteInd - 1);
        }
      }
    }

    firebase
      .firestore()
      .collection('notes')
      .doc(note.id)
      .delete();
  }
}

export default App;
