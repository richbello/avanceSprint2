import React, { useState } from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import datos from '../archivo.json'

function Cliente(){
    const volver = () => {
        setBarra(barra= <Inicio />)
        setInicio(inicio="")
        setVisualizar(visualizar=[])
        setModificar(modificar="")
    }

    function inicializacion(){
        setInicio(inicio=imagen)
        setVisualizar(visualizar=[])
        setModificar(modificar="")
    }

    function visualizacion(){
        setInicio(inicio="")
        setVisualizar(visualizar=datos)
        setModificar(modificar="")
    }

    function modificacion () {
        let mod =
        <div>
            <div> <label> Producto </label> <input type="text"></input> </div>
            <div> <label> Descripción </label> <input type="text"></input> </div>
            <div> <label> Marca </label> <input type="text"></input> </div>
            <button> Guardar </button>
        </div>
        setModificar(modificar=mod)
        setInicio(inicio="")
        setVisualizar(visualizar=[])
    }

    let init = <div className="blockCliente">
                    <button onClick={inicializacion} className="buttonCliente"> Inicio </button>
                    <button onClick={visualizacion} className="buttonCliente"> Visualizar </button>
                    <button onClick={modificacion} className="buttonCliente"> Modificar </button>
                    <button onClick={volver} className="buttonCliente"> Volver </button>
                </div>
    let imagen = <img src="https://www.grapheverywhere.com/wp-content/uploads/2021/03/business-people-shaking-hands-meeting-room-scaled.jpg"></img>
   
    let [barra, setBarra] = useState(init)
    let [inicio, setInicio] = useState(imagen)
    let [visualizar, setVisualizar] = useState([])
    let [modificar, setModificar] = useState("")

    return(
        <div>
            {barra}
            {inicio}
            {visualizar.map( (elem, idx) => {
                return(
                    <div className="objetos" key={elem.id}>
                        <strong> Objeto {idx+1} : </strong> {elem.producto + " " + elem.descripción + " " + elem.marca}
                    </div>
                )
            })}
            {modificar}
        </div>
    )

}
export default Cliente 