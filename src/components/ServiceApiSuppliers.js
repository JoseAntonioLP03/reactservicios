import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';


export default class ServiceApiSuppliers extends Component {
    url = Global.urlNorthwind;
    cajaId = React.createRef();
    state = {
        suppliers : [],
        supplier: null
    }
    //Creamos el metodo para cargar los suppliers
    loadSuppliers = () => {
        let request = "Suppliers";
        console.log("Antes del servicio")
        axios.get(this.url+request).then(response =>{
            console.log("Leyendo servicio")
            this.setState({
                suppliers : response.data.value
            })
        })
        console.log("Después del servicio")
    }
    buscarId = (event) => {
        event.preventDefault();
        let request = "Suppliers";
        let id = parseInt(this.cajaId.current.value);
        //Realizamos la petición de nuevo con los proveedores
        axios.get(this.url+request).then(response =>{
            for(var supplier of response.data.value){
                if (supplier.SupplierID === id){
                    this.setState({
                        supplier: supplier
                    })
                }break;
            }
        })
    }
    componentDidMount= () => {
        console.log("Creando Component")
        this.loadSuppliers();
    }
    render() {
        return (
        <div>
            <h1>ServiceApiSuppliers</h1>
            <form>
                <label>Introduzca Id</label>
                <input type='text' ref={this.cajaId}></input>
                <button onClick={this.buscarId}>Buscar Supplier</button>
            </form>
            {
                this.state.supplier && 
                (<div>
                <h1>Company: {this.state.supplier.CompanyName}</h1>
                <h2>Direccion: {this.state.supplier.Address}</h2>
                </div>)
            }
            <ul>
            {
                this.state.suppliers.map((supplier,index)=>{
                    return(<li 
                        key={index} 
                        style={{color:"darkgreen"}}>
                            {supplier.SupplierID} - {supplier.ContactName}
                        </li>)
                })
            }
            </ul>
        </div>
        )
    }
}
