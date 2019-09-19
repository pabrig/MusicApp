import React from 'react';
import Imagen from '../icons8-musicalmente-48.png'

function Informacion({info}){
    
    if(Object.keys(info).length === 0) return null; 
  return (
      <div className="card border-light">
          <div className="card-header bg-info text-ligth ">
              Info Artist
          </div>
          <div className="card-body">
          <img src={info.strArtistThumb} alt="img-artist" className="img-artist"/>
          <p className="card-text">Genere: {info.strGenre}</p>
          <h2 className="card-text text-center"><img src={Imagen} alt="logo"/>Biography: </h2>
          <p className="card-text">{info.strBiographyES}</p>
         
          


          <p className="card-text">
              <a href={`http://${info.strFacebook}`} target="_blank" rel="noopener nooreferrer">
                  <i className="fab fa-facebook"></i>
              </a>
              <a href={`http://${info.strTwitter}`} target="_blank" rel="noopener nooreferrer">
                  <i className="fab fa-twitter"></i>
              </a>
              <a href={`${info.LastFMChart}`} target="_blank" rel="noopener nooreferrer">
                  <i className="fab fa-lastfm"></i>
              </a>
             

             
          </p>


          </div>
      </div>
  )
}

export default Informacion