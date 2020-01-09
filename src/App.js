import React, {Component} from 'react';
import LottoBall from './LottoBall';
import './App.css';
import './lotto.css';

class App extends Component {
  render(){
    return (
        <div className="App">
          <LottoBall title= "MEGASENA"/>
          <LottoBall title= "QUINA" numBalls={5} maxNum={80}/>
          <LottoBall title= "DIA DE SORTE" numBalls={7} maxNum={31}/>
                    
        </div>  
     );
}
}

export default App;
