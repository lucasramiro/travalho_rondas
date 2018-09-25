import React, { Component } from 'react';
import Header from '../componentes/Header';
import { Link } from 'react-router-dom'




class Salvar extends Component {
  render() {
    return (
    <div>
      <Header/>
      <form className="d-flex flex-column bd-highlight mb-3">
        <div className="form-group p-2 bd-highlight">
          <label htmlFor="Codigo">Código do Novo Circuito</label>
          <input type="text" className="form-control"  placeholder="Codigo da ronda"/>
        </div>       
        <div className="form-group p-2 bd-highlight text-center">
              <button type="button" className="btn btn-light rounded border"><Link to="/Menu">Ok</Link></button>
        </div>
      </form>
    </div>
  
          );
        }
      }
      
  export default Salvar; 