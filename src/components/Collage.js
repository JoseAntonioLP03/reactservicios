import React, { Component } from 'react'

export default class Collage extends Component {
    state = {
        numeros:[],
    }

    generarCollage=()=>{
        let aux = [];
        let numero = parseInt(this.props.numero);
        while(numero !== 1){
            if (numero % 2 === 0){
                numero = numero / 2;
            }else{
                numero = numero * 3 + 1;
            }
            aux.push(numero);
        }
        this.setState({
            numeros: aux
        })
    }
    componentDidUpdate=(oldprops)=>{
        if(oldprops.numero != this.props.numero){
            this.generarCollage();
        }
    }
    componentDidMount=()=>{
        this.generarCollage();
    }

    render() {
        return (
            <div>
                <h1>Collage Rutas</h1>
                <h3 style={{color:"darkturquoise"}}>Número {this.props.numero}</h3>
                <ul>
                    {
                        this.state.numeros.map((num, index)=>{
                            return(<li key={index}>{num}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
