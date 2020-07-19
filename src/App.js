import React from 'react';
import './App.css';
import Sidebar from './sidebar/sidebar'
import Editor from './editor/editor'

const firebase = require("firebase");

class App extends React.Component{


  constructor(){
    super();

    this.state = {
      selNotInd: null,
      selNote: null,
      notes: null
    };
  }

  render(){
    return(
      <div className="api-container">
        <Sidebar 
        selNoteInd = {this.state.selNoteInd}
        notes = {this.state.notes}
        deleteNote={this.deleteNote}
        selectNote={this.selectNote}
        newNote={this.newNote}>
        </Sidebar>
        {
          this.state.selectedNote ?
          <Editor selectedNote={this.state.selectedNote}
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          noteUpdate={this.noteUpdate}>
          </Editor> :
          null
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
        this.setState({notes: notes});
      });

  }

  selectNote = (note, index) => this.setState({ selNoteInd: index, selectedNote: note });
}

export default App;
