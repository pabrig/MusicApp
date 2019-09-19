import React, {useState} from 'react';
import Imagen from '../icons8-musicalmente-48.png'

function Formulario ({consultarAPILetra}) {

    const [ busqueda, agregarBusqueda ] = useState({
        artista: '',
        cancion: ''
    })

    //Funcion para actualizar state
    const actualizarState = e => {
        agregarBusqueda ({
            ...busqueda,
            [e.target.name] : e.target.value
        })
        console.log(busqueda)
    }

    const enviarInformacion = e => {

        e.preventDefault();

        consultarAPILetra(busqueda);

    }
    return (
    <div className="bg-info">
    <div className="container">
        <div className="row">
            <form 
              onSubmit={enviarInformacion}
              className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                <fieldset>
                    <legend className="text-center"><img src={Imagen} alt="logo"/>Music App</legend>
                    <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                              <label>Artist</label>
                              <input 
                                  type="text" 
                                  className="form-control" 
                                  name="artista" 
                                  onChange={actualizarState}
                                  placeholder="Artist" 
                                  required
                              />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                              <label>Song</label>
                              <input 
                                  type="text" 
                                  className="form-control" 
                                  name="cancion" 
                                  onChange={actualizarState}
                                  placeholder="Titles" 
                                  required
                              />
                          </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-info float-right">Search</button>
                </fieldset>
            </form>
        </div>
    </div>
</div>
)
}

export default Formulario;