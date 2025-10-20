import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../../Global';
import axios from 'axios';

export default class Departamentos extends Component {
    url = Global.urlDepartamentos;
    selectedDepartamento = React.createRef();
    state = {
        departamentos: [],
        idDepartamento: 0
    }

    loadDepartamentos = () => {
        let request = "/webresources/departamentos";
        axios.get(this.url + request).then(response => {
            console.log("Leyendo departamentos");
            this.setState({
                departamentos: response.data
            });
        });
    }
    componentDidMount = () => {
        this.loadDepartamentos();
    }

    buscarEmpleados = (event) => {
        event.preventDefault();
        let iddepartamento = this.selectedDepartamento.current.value;
        this.setState({
            idDepartamento: iddepartamento
        });

    }
    render() {
        return (
        <div>
            <h1 style={{color:"red"}}>Departamentos Component</h1>
            <form>
                <select ref={this.selectedDepartamento}>
                    {
                        this.state.departamentos.map((dep, index) => {
                            return (
                                <option key={index} value={dep.numero}>
                                    {dep.nombre}
                                </option>
                            )
                        })
                    }
                </select>
                <button onClick={this.buscarEmpleados}>
                    Buscar Empleados
                </button>
            </form>
            {
                this.state.idDepartamento != 0 &&
                <Empleados iddepartamento={this.state.idDepartamento}/>
            }
        </div>
        )
    }
}
