import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/collage/10">Collage 10</a></li>
                <li><a href="/collage/100">Collage 100</a></li>
                <li><a href="/collage/1000">Collage 1000</a></li>
                <li><a href="/collage/10000">Collage 10000</a></li>
                <li><a href="/tabla/10">Tabla de Multiplicar 10</a></li>
                <li><a href="/tabla/15">Tabla de Multiplicar 15</a></li>
                <li><a href="/tabla/20">Tabla de Multiplicar 20</a></li>
                <li><a href="/tabla/25">Tabla de Multiplicar 25</a></li>
            </ul>
        </div>
        )
    }
}
