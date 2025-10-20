import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global';

export default class Alumnos extends Component {
    url = Global.urlEjemplos;
    state = {
        alumnos: [],
        texto: ""
    }

    componentDidUpdate = (oldProps) => {
        //Dibujamos las nuevas y las antiguas
        console.log("Current: " + this.props.idcurso);
        console.log("Old: " + oldProps.idcurso);
        //Solamente actulizamos state si props ha cambiado
        if(oldProps.idcurso != this.props.idcurso){
            this.loadAlumnos();
        }
    }
    loadAlumnos = () => {
        let idCurso = this.props.idcurso;
        let request = "api/Alumnos/FiltrarCurso/" + idCurso;
        axios.get(this.url + request).then(response => {
            console.log("Leyendo alumnos");
            this.setState({
                alumnos: response.data
        });
        })
    }
    componentDidMount = () => {
        console.log("Cargando Alumnos");
        this.loadAlumnos();
    }
    render() {
    return (
        <div>
            <h1 style={{color:"blue"}}>
                Alumnos Component {this.props.idcurso}
            </h1>
            <h1>{this.state.texto}</h1>
            <ul>
                {
                    this.state.alumnos.map((alumno, index) => {
                        return (
                            <li key={index}>
                                {alumno.idAlumno} - {alumno.nombre} - {alumno.apellidos} - {alumno.idCurso}
                                <button onClick={() => this.props.mostrarDetalles(alumno)}>
                                    Detalle
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
    }
}
