import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import Counter from './components/counter/counter';

class App extends Component{
  render(){
  return (
    <div className="App">
      {/* Hello App and World!
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent> */}
     
     <Counter></Counter>
    </div>

    
  );
}
}


class FirstComponent extends Component{
  render(){
  return (
    <div className="firstComponent">
      Hello World 2: Never Hello World!
    </div>
  );
  }
}

function SecondComponent(){
  return(

    <div className="secondComponent">
    Hello World 3: A simple function component
  </div>
  );
}
export default App;
