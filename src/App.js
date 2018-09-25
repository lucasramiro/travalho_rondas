import React, { Component } from 'react';
import  {BrowserRouter as Router , Route} from 'react-router-dom'
import Login from './componentes/Login';
import Menu from './componentes/Menu';
import Participar from './componentes/Participar';
import Novo from './componentes/Novo';
import Circuito from './componentes/Circuito';
import Finalizar from './componentes/Finalizar';
import Cadastro from './componentes/Cadastro';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/Participar" component={ Participar }/>
        <Route exact path="/" component={ Login }/>
        <Route exact path="/Menu" component={ Menu }/>
        <Route exact path="/Novo" component={ Novo }/>
        <Route exact path="/Circuito" component={ Circuito }/>
        <Route exact path="/Finalizar" component={ Finalizar }/>
        <Route exact path="/Cadastro" component={ Cadastro }/>

        </ div>
      </Router>
    );
   
  }
}

export default App;
