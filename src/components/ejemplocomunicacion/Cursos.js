import React, { Component } from 'react'
import Alumnos from './Alumnos'
import Global from '../../Global';
import axios from 'axios';

export default class Cursos extends Component {
    url = Global.urlEjemplos;
    selectCurso = React.createRef();
    state = {
        cursos: [],
        idCurso: 0,
        alumnoSeleccionado: null
    }

    mostrarDetallesAlumno = (alumno) => {
        this.setState({
            alumnoSeleccionado: alumno
        });
    }
    loadCursos = () => {
        let request = "api/Alumnos/Cursos";
        axios.get(this.url + request).then(response => {
            console.log("Leyendo cursos");
            this.setState({
                cursos: response.data
            });
        });
    }
    componentDidMount = () => {
        this.loadCursos();
    }

    buscarAlumnos = (event) => {
        event.preventDefault();
        let idcurso = this.selectCurso.current.value;
        this.setState({
            idCurso: idcurso
        });

    }
    render() {
        return (
        <div>
            <h1 style={{color:"green"}}>Practica JQUERY en REACT</h1>
            <form>
                <select ref={this.selectCurso}>
                    {
                        this.state.cursos.map((curso, index) => {
                            return (
                                <option key={index} value={curso}>
                                    {curso}
                                </option>
                            )
                        })
                    }
                </select>
                <button onClick={this.buscarAlumnos}>
                    Buscar Alumnos
                </button>
                {this.state.alumnoSeleccionado && (
                <div>
                    <h3>{this.state.alumnoSeleccionado.nombre} {this.state.alumnoSeleccionado.apellidos}</h3>
                    <h3>ID Alumno: {this.state.alumnoSeleccionado.idAlumno}</h3>
                    <img style={{height:"100px",width:"100px"}} src={this.state.alumnoSeleccionado.imagen}></img>
                </div>
                )}
            </form>
            {
                this.state.idCurso != 0 &&
                <Alumnos idcurso={this.state.idCurso}
                mostrarDetalles={this.mostrarDetallesAlumno}/>
            }
        </div>
        )
    }
}
