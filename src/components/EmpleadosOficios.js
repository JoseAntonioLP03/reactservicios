import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class EmpleadosOficios extends Component {
    urlEmpleados = Global.urlEmpleados
    selectOficio = React.createRef();

    loadOficios = () => {
        let request = "api/empleados";
        axios.get(this.urlEmpleados+request).then(response => {
            console.log("Leyendo Departamentos")
            this.setState({
                oficios : response.data
            })
        })
    }

    loadEmpleados = (event) => {
        event.preventDefault();
        let nombreOficio = this.selectOficio.current.value;
        let request = "api/empleados/empleadosoficio/"+nombreOficio;
        axios.get(this.urlEmpleados+request).then(response =>{
            console.log("Leyendo Empleados");
            this.setState({
                empleados : response.data
            })
        })
    }

    componentDidMount=()=>{
        console.log("Cargando Componente");
        this.loadOficios();
    }

    state = {
        oficios: [],
        empleados: []
    }
    render() {
        return (
        <div>
            <h1 style={{color:"darkslategray"}}>API Empleados Oficios</h1>
            <form>
                <label>Seleccione Oficios</label>
                <select ref={this.selectOficio}>
                    {
                        this.state.oficios.map((oficio,index)=>{
                            return(<option 
                                key={index} 
                                value={oficio.oficio}>
                                {oficio.oficio}
                            </option>)
                        })
                    }
                </select>
                <button style={{backgroundColor:"white",color:"darkslategray"}} 
                        onClick={this.loadEmpleados}>
                    Buscar Empleados
                </button>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID Empleado</th>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>ID Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.empleados.map((empleado,index)=>{
                            return(<tr 
                                key={index}>
                                <td>{empleado.idEmpleado}</td>
                                <td>{empleado.apellido}</td>
                                <td>{empleado.oficio}</td>
                                <td>{empleado.departamento}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
            </form>
        </div>
        )
    }
}
