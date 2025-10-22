import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
// Bootstrap CSS for table styling
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Trabajadores extends Component {
    url = Global.apiTrabajadores;
    state = {
        mensaje: "",
        trabajadores: []
    }
    
    loadTrabajadores = () => {
        //RECUPERAMOS EL ARRAY DE ID DE HOSPITALES
        let idsHospitales = this.props.idhospitales;
        let data = "";
        for (var id of idsHospitales){
            data += "idhospital=" + id + "&";
        }
        //TRAE = idhospital=22&idhospital=45&
        //Quiero eliminar el ultimo caracter
        data = data.substring(0,data.length -1);
        this.setState({
            mensaje: data
        })
        let request = "api/trabajadores/trabajadoreshospitales?"+data;
        axios.get(this.url+request).then(response => {
            console.log("Trabajadores!!!");
            this.setState({
                trabajadores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadTrabajadores();
    }

    componentDidUpdate=(oldprops)=>{
        if(oldprops.idhospitales != this.props.idhospitales){
            this.loadTrabajadores();
        }
    }

    render() {
        return (
        <div>
            <div className="container py-2">
                <h1 className="text-primary">Trabajadores</h1>
                {/* <h2 style={{color:"darkred"}}>{this.state.mensaje}</h2> */}
                <div className="table-responsive shadow-sm rounded">
                    <table className="table table-striped table-hover table-bordered table-sm align-middle mb-0">
                        <thead className="table-dark">
                            <tr>
                                <th>Apellido</th>
                                <th>Oficio</th>
                                <th>Salario</th>
                                <th>ID Hospital</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.trabajadores.map((trabajador,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{trabajador.apellido}</td>
                                            <td>{trabajador.oficio}</td>
                                            <td>{trabajador.salario}</td>
                                            <td>{trabajador.idHospital}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}
