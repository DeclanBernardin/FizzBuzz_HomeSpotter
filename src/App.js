import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    outcome: []
  }
 
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
        this.setState({
          ...this.state.outcome.push("HomeSpotter")
        })
      }
      else if (numbers[i] % 3 === 0){
        console.log("Home")
        this.setState({
          ...this.state.outcome.push("Home")
        })
      }
      else if (numbers[i] % 5 === 0){
        console.log("Spotter")
        this.setState({
          ...this.state.outcome.push("Spotter")
        })
      } else {
        console.log("this number is not divisible", numbers[i])
        this.setState({
          ...this.state.outcome.push(numbers[i])
        })
      }
    
  }
  }

  render() {

    let fizzBuzz = this.state.outcome.map((outcome) => {
      return( 
        <div>
          <p>{outcome}</p>
        </div>
      )
    })
    return(
      <div style={{ textAlign: 'center' }}>
        <h1 >
        Function HomeSpotter 
        </h1>
      <button onClick={this.HomeSpotter}>Activate HomeSpotter</button>
      {fizzBuzz}
      </div>
    )
  }
}

export default App;
