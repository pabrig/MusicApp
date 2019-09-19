import React,{useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';
import Cancion from  './components/Cancion';
import INformacion from './components/Informacion'
import axios from 'axios';
import Informacion from './components/Informacion';


function App() {
  
  const [ artista, agregarArtista ] = useState ('');
  const [ letra, agregarLetra ] = useState ([]);
  const [ info, agregarInfo ] = useState({});

  //metodo para consultar API
  const consultarAPILetra = async busqueda => {
    const {artista, cancion } = busqueda;
     const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

     //consulta
     const resultado = await axios (url);
     //almacenar el artista buscado
     agregarArtista(artista)
     //almacenar letra en el state
     agregarLetra(resultado.data.lyrics);
     
    
  }

  //metodo para consultar la API info
  const consultarAPIInfo = async () => {
    if (artista){
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
    const resultado = await axios(url);
    agregarInfo(resultado.data.artists[0]);

     } // console.log(info);
  }

  useEffect (
    () => {
       consultarAPIInfo()
    },[artista]
  )
  return (
    <Fragment>

    

       <Formulario
       consultarAPILetra={consultarAPILetra}
        />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
               <Informacion
                 info={info}
               />
            </div>
            <div className="col-md-6">
               <Cancion 
                 letra={letra}
               />
            </div>
          </div>
        </div>

    </Fragment>
  )
}

export default App;
