import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
    render() {
        return (
        <div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/collage/10">Collage 10</NavLink></li>
                <li><NavLink to="/collage/20">Collage 20</NavLink></li>
                <li><NavLink to="/tabla/10">Tabla Multiplicar 10</NavLink></li>
                <li><NavLink to="/tabla/20">Tabla Multiplicar 20</NavLink></li>
            </ul>
        </div>
        )
    }
}
