import React, { Component } from 'react'
import axios from 'axios'


export default class ServiceApiSuppliers extends Component {
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"
    cajaId = React.createRef();
    state = {
        suppliers : []
    }
    //Creamos el metodo para cargar los suppliers
    loadSuppliers = () => {
        console.log("Antes del servicio")
        axios.get(this.url).then(response =>{
            console.log("Leyendo servicio")
            this.setState({
                suppliers : response.data.value
            })
        })
        console.log("Después del servicio")
    }
    buscarId = (event) => {
        event.preventDefault();
        let id = parseInt(this.cajaId.current.value);
        id = id - 1;
        console.log(this.state.suppliers)
        if(id == this.state.suppliers){
            
        }
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
