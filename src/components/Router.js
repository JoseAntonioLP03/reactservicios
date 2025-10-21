import React, { Component } from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import TablaMultiplicar from './TablaMultiplicar'
import Home from './Home'
import NotFound from './NotFound'
import Collage from './Collage'
import MenuRutas from './MenuRutas'

export default class Router extends Component {
    render() {
        function TablaMultiplicarElement(){
            //ESTA FUNCIÓN NOS SERVIRA PARA CAPTURAR LOS PARAMETROS 
            //RECIBIDOS EN UNA RUTA Y ENVIARLOS CON PROPS A NUESTRO COMPONENT
            //VOY A ENVIAR UN APRAMETRO LLAMADO minumero
            let {minumero} = useParams();
            //DEVOLVEMOS EL COMPONENT TABLAMULTIPLICAR CON SUS PROPS
            return <TablaMultiplicar numero={minumero}/>
        }
        function CollageFuncion(){
            let {numero} = useParams();
            return <Collage numero={numero}/>
        }
        return (
        <BrowserRouter>
            <MenuRutas/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/collage/:numero' element={<CollageFuncion/>}/>
                <Route path='/tabla/:minumero' element={<TablaMultiplicarElement/>}/>
                {/* PARA ESCRIBIR LA RUTAS QUE NO EXISTEN CON 404 HAY QUE ESCRIBIR CON * 
                Y TIENE QUE SER LA ULTIMA RUTA SIEMPRE */}
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
        )
    }
}
