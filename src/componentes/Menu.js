import React, { Component } from 'react';
import Header from '../componentes/Header';
import { Link } from 'react-router-dom'


class Menu extends Component {
    render() {
        return (
            <div>
            <Header/>
            <nav className="d-flex flex-column bd-highlight mb-3">
                <div className="form-group p-2 bd-highlight text-center">
                    <button type="button" className="btn btn-light rounded border"><Link to="/Circuito">Realizar</Link></button>

                </div>
                <div className="form-group p-2 bd-highlight text-center">
                    <button type="button" className="btn btn-light rounded border"><Link to="/Participar">Participar</Link></button>
                </div>
                <div className="form-group p-2 bd-highlight text-center">
                    <button type="button" className="btn btn-light rounded border"><Link to="/Novo">Novo</Link></button>
                </div>
                <div className="form-group p-2 bd-highlight text-center">
                    <button type="button" className="btn btn-light rounded border"><a className="nav-link active" href="">Exporta</a></button>
                </div>
            </nav>
            </div>



        );
    }
}

export default Menu;