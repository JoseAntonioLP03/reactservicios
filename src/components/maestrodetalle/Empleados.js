import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global';

export default class Empleados extends Component {
    url = Global.urlEmpleados;
    state = {
        empleados: [],
        texto: ""
    }

    componentDidUpdate = (oldProps) => {
        //Dibujamos las nuevas y las antiguas
        console.log("Current: " + this.props.iddepartamento);
        console.log("Old: " + oldProps.iddepartamento);
        //Solamente actulizamos state si props ha cambiado
        if(oldProps.iddepartamento != this.props.iddepartamento){
            this.loadEmpleados();
        }
    }
    loadEmpleados = () => {
        let idDepartamento = this.props.iddepartamento;
        let request = "/api/empleados/empleadosdepartamento/" + idDepartamento;
        axios.get(this.url + request).then(response => {
            console.log("Leyendo empleados");
            this.setState({
                empleados: response.data
        });
        })
    }
    componentDidMount = () => {
        console.log("Cargando Empleados");
        this.loadEmpleados();
    }
    render() {
    return (
        <div>
            <h1 style={{color:"blue"}}>
                Empleados Component {this.props.iddepartamento}
            </h1>
            <h1>{this.state.texto}</h1>
            <ul>
                {
                    this.state.empleados.map((emp, index) => {
                        return (
                            <li key={index}>
                                {emp.apellido} - {emp.oficio} - {emp.departamento}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
    }
}
