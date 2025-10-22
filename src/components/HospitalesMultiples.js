import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import Global from '../Global'
import axios from 'axios'

export default class HospitalesMultiples extends Component {
    selectHospital = React.createRef();
    cajaIncremento = React.createRef();
    url = Global.apiTrabajadores;
    
    state ={
        hospitales: [],
        hospitalesSeleccionados : []
    }

    loadHospitales = () => {
        let request = "api/hospitales";
        axios.get(this.url+request).then(response => {
            console.log("Cargando Hospitales")
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales();
    }

    getHospitalesSeleccinados = (event) => {
        event.preventDefault();
        let aux = [];
        let options = this.selectHospital.current.options;
        for(var option of options){
            if (option.selected == true){
                aux.push(option.value);
            }
        }
        this.setState({
            hospitalesSeleccionados: aux
        })
    }

    updateSalarioTrabajadores = (event) => {
        event.preventDefault();

        let idsHospitales = this.state.hospitalesSeleccionados
        let data = "";
        let incremento = parseInt(this.cajaIncremento.current.value)
        for (var id of idsHospitales){
            data += "idhospital=" + id + "&";
        }
        //TRAE = idhospital=22&idhospital=45&
        //Quiero eliminar el ultimo caracter
        data = data.substring(0,data.length -1);

        let request = "api/trabajadores/UpdateSalarioTrabajadoresHospitales?incremento="+incremento+"&"+data;
        axios.put(this.url+request).then(response => {
            console.log("Aumento de sueldo!!!");
            
        })
    }

    render() {
        return (
        <div>
            <h1>Hospitales Multiples</h1>
            <form>
                <select ref={this.selectHospital} className='form form-control' size="5" multiple>
                    {
                        this.state.hospitales.map((hospital,index) => {
                            return(
                            <option key={index} value={hospital.idHospital}>
                                {hospital.nombre}
                            </option>)
                        })
                    }
                </select>
                <br></br>
                <button onClick={this.getHospitalesSeleccinados} className='btn btn-warning'>
                    Mostrar Trabajadores
                </button>
            </form>
            <br></br>
            <form>
                    <label>Incrementar Salario:</label>
                    <input type='text' className='form -form control' ref={this.cajaIncremento}/>
                    <button className='btn btn-outline-dark' onClick={this.updateSalarioTrabajadores}>
                        Incrementar Salario
                    </button>
                </form>
            {
                this.state.hospitalesSeleccionados.length != 0 &&
                <Trabajadores idhospitales={this.state.hospitalesSeleccionados}/>

            }
        </div>
        )
    }
}
