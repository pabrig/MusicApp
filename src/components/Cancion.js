import React,{Fragment} from 'react';
import Imagen from '../icons8-musicalmente-48.png'

function Cancion ({letra}){
    if (letra.length === 0) return  null;
      return (
          <Fragment>
          <h2><img src={Imagen} alt="logo"/>Lyrics</h2>
          <p className="letra">{letra}</p>
          </Fragment>
      )
}

export default Cancion;