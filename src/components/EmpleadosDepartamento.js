import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class EmpleadosDepartamento extends Component {
    urlEmpleados = Global.urlEmpleados;
    urlDepartamentos = Global.urlDepartamentos;
    selectDepartamento = React.createRef();

    buscarEmpleados = (event) =>{
        event.preventDefault();
        let idDepartamento = parseInt(this.selectDepartamento.current.value);
        let request = "api/empleados/empleadosdepartamento/"+idDepartamento;
        axios.get(this.urlEmpleados+request).then(response =>{
            console.log("Leyendo Empleados");
            this.setState({
                empleados : response.data
            })
        })
    }

    loadDepartamentos = () => {
        let request = "/webresources/departamentos"
        axios.get(this.urlDepartamentos+request).then(response => {
            console.log("Leyendo Departamentos")
            this.setState({
                departamentos : response.data
            })
        })
    }

    componentDidMount=()=>{
        console.log("Cargando Componente");
        this.loadDepartamentos();
    }

    state = {
        empleados: [],
        departamentos: []
    }
    render() {  
        return (
        <div>
            <h1 style={{color:"darkslategray"}}>API Empleados Departamento</h1>
            <form>
                <label>Seleccione Departamento</label>
                <select ref={this.selectDepartamento}>
                    {
                        this.state.departamentos.map((departamento,index) => {
                        return(<option 
                                key={index} 
                                value={departamento.numero}>
                                {departamento.numero}
                            </option>)
                        })
                    }
                </select>
                <button style={{backgroundColor:"white",color:"darkslategray"}} 
                        onClick={this.buscarEmpleados}>
                    Buscar Empleados
                </button>
            </form>
            <ul>
                {
                    this.state.empleados.map((empleado,index) => {
                        return(<li key={index}>{empleado.apellido}</li>)
                    })
                }
            </ul>
        </div>
        )
    }
}
