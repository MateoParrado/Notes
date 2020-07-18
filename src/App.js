import React from 'react';
import './App.css';

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
    return(<div>Hello World</div>);
  }

  //called once when the component is mounted
  componentDidMount = () => {
    firebase
      .firestore()
      .collection("notes")
      //gets called whenever db is updated
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(doc => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        this.setState({note: notes});
      });

  }
}

export default App;
