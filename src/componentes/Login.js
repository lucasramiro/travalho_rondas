import React, { Component } from 'react';
import Header from '../componentes/Header';
import { Link } from 'react-router-dom'



class Login extends Component {
  render() {
    return (
    <div>
      <Header/>
      <form className="d-flex flex-column bd-highlight mb-3">
        <div className="form-group p-2 bd-highlight">
          <label htmlFor="Usuario">Usuario</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

        </div>
        <div className="form-group p-2 bd-highlight">
            <label htmlFor="Senha">Senha</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group p-2 bd-highlight text-center">
              <button type="button" className="btn btn-light rounded border"><Link to="/Menu">Entrar</Link></button>
        </div>
        <div className="form-group p-2 bd-highlight text-center">
        
              <Link to="/Cadastro">Não Tenho Cadastro</Link>


        </div>
      </form>
    </div>
  
          );
        }
      }
      
  export default Login;