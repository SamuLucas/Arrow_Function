import React, {Component} from 'react'



class App extends Component{
  Msm = () =>{
    console.log('Essa é a mensagem');
  }
  
  
   Num = (Numero) => {
  return Numero;
  }
  Numero = 43
  
  
  
  
  render(){
    return (
      
      <div>

    <h1 Msm = {this.Msm}>Olá, Esse é o meu exercício de Arrow Function!</h1>
    
    <h2>{`O dodro do numero é ${this.Numero*2}`}</h2>
    
    </div>
    )
  }
    
}
export default App;