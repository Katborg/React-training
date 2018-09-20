import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state  ={
   persons: [
     {name: 'Jasper'},
     {name: 'Esben'},
     {name: 'Thor'}
   ]
 }

 knapNameHandler = (newName) =>{
   //console.log('Was a jepperdy clicker');
  this.setState({
    persons:  [
     {name: newName},
     {name: 'Esben The Party'},
     {name: 'Thor The Driver'}
    ] 
    })
 }

 nameChangedeHandler = (event) => {
  this.setState({
    persons:  [
     {name: 'Jasper'},
     {name: 'Esben The Party'},
     {name: event.target.value}
    ] 
    })
 }

  render() {
    const style ={
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Jeppedi, Im a React App</h1>
        <button
          style={style}
          onClick ={()=> {this.knapNameHandler('Max Man!')}}>
          The Knap
          </button>
        <Person 
          name ={this.state.persons[0].name}>
          who likes to run</Person>
        <Person 
          name ={this.state.persons[1].name}
          click={this.knapNameHandler.bind(this,'Jasper manly man')}>
        </Person>
        <Person 
          name ={this.state.persons[2].name}
          changed={this.nameChangedeHandler}
          >
        </Person>
      </div>
    );

    // return React.createElement('div', {className : 'App'}, React.createElement('h1',null,'Jeppedi, I\'m a new React App'))
  }
}

export default App;
