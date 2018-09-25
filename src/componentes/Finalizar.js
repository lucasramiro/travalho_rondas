import React, { Component } from 'react';
import Header from '../componentes/Header';
import { Link } from 'react-router-dom'




class Finalizar extends Component {
  render() {
    return (
    <div>
      <Header/>
      <form className="d-flex flex-column bd-highlight mb-3">
        <div className="form-group p-2 bd-highlight">
          <label htmlFor="Duracao">Duração do circuito</label>
          <input type="nunber" className="form-control"  placeholder="Ex:15 min"/>
        </div>       
        <div className="form-group p-2 bd-highlight text-center">
              <button type="button" className="btn btn-light rounded border"><Link to="/Menu">Salvar</Link></button>
        </div>
        <div className="form-group p-2 bd-highlight text-center">
              <button type="button" className="btn btn-light rounded border"><Link to="/Menu">Cancelar</Link></button>
        </div>
      </form>
    </div>
  
          );
        }
      }
      
  export default Finalizar;