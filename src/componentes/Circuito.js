import React, { Component } from 'react';
import Header from '../componentes/Header';
import { Link } from 'react-router-dom'




class Circuito extends Component {
  render() {
    return (
    <div>
      <Header/>
      <form className="d-flex flex-column bd-highlight mb-3">
        <div className="form-group p-2 bd-highlight">
        <img src="http://abcdoiphone.com/wp-content/uploads/2016/10/Implement-GPS-data-for-your-Google-MAP.gif" class="img-fluid" alt="Imagem responsiva"/>
         
        </div>       
        <div className="form-group p-2 bd-highlight text-center">
              <button type="button" className="btn btn-light rounded border"><Link to="/Menu">Gravar Ponto</Link></button>
              <button type="button" className="btn btn-light rounded border"><Link to="/Menu">Finalizar</Link></button>
             
        </div>
      </form>
    </div>
  
          );
        }
      }
      
  export default Circuito;