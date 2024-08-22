import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import './HomeMap.css';
import { FaRoute } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const HomeMap = () => {
  return (
      <div className='main-container home-map'>
          <div className='map-container-nav'>
                <span className='span'>
                    <Link to='/map'> <FaRoute className='route-logo'/></Link>
              </span>
              <h1 className='map-heading'>
                  DTC
              </h1>
            </div>
        
          <MapContainer center={[11.0166292, 76.9775246]} zoom={8} style={{height:'800px' , width:'100%',zIndex:0}} className='home-map-container'>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
          />
          
          </MapContainer>
    </div>
  )
}

export default HomeMap