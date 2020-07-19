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
      note: null
    };
  }

  render(){
    return(
      <div className="api-container">
        <Sidebar 
        selNoteInd = {this.state.selNoteInd}
        notes = {this.state.notes}>

        </Sidebar>
        <Editor>
          
        </Editor>
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
        this.setState({note: notes});
      });

  }
}

export default App;
