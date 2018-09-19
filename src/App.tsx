import * as React from 'react';
import AddItem from './AddItem';
import './App.css';


class App extends React.Component {

  public state = {
    loading: false,
    topic: ''
  };



  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Do all the things.</h1>
          <AddItem/>
        </header>
      </div>
    );
  }
}

export default App;
