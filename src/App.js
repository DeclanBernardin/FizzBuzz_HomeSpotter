import React, {Component} from 'react';
import './App.css';

class App extends Component {


  HomeSpotter = () => {
    let numbers = [1]
    let one = 1 
    for ( let i = 0; i < numbers.length; i++){
      if (numbers[i] < 100 ){
        one +=1
        numbers.push(one)
      }
      console.log(numbers)
    }
    for (let i = 0; i< numbers.length; i++){
      if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0){
        console.log("HomeSpotter")
      }
      else if (numbers[i] % 3 === 0){
        console.log("Home")
      }
      else if (numbers[i] % 5 === 0){
        console.log("Spotter")
      } else {
        console.log("this number is not divisible", numbers[i])
      }
    
  }
  }




  render() {
    return(
      <div style={{ textAlign: 'center' }}>
        <h1 >
        Function HomeSpotter 
        </h1>
      <button onClick={this.HomeSpotter}>Activate HomeSpotter</button>
      </div>
    )
  }
}

export default App;
