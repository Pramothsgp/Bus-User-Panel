import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import './Map.css'
import { MdMyLocation } from 'react-icons/md';
import { FaArrowLeft, FaLocationDot } from 'react-icons/fa6';
import AvailableBus from '../AvailableBus/AvailableBus';
import { Link } from 'react-router-dom';

const Routing = ({ pointA, pointB }) => {
  const map = useMap();

  useEffect(() => {
    if (!pointA || !pointB || !map) return;

    let routingControl;

    const initializeRouting = () => {
      if (!map) return;

      routingControl = L.Routing.control({
        waypoints: [
          L.latLng(pointA.latitude, pointA.longitude),
          L.latLng(pointB.latitude, pointB.longitude),
        ],
        lineOptions: {
          styles: [{ color: '#3388ff', weight: 5 }],
        },
        createMarker: () => null, // No markers at the waypoints
      }).addTo(map);
    };

    const cleanupRouting = () => {
      if (routingControl && map) {
        try {
          map.removeControl(routingControl);
        } catch (error) {
          console.warn("Failed to remove routing control:", error);
        }
      }
    };

    const routingTimeout = setTimeout(initializeRouting, 100);

    return () => {
      clearTimeout(routingTimeout);
      cleanupRouting();
    };
  }, [pointA, pointB, map]);

  return null;
};

const Map = ({ locationData ,buslist}) => {

    const [selectedStopA, setSelectedStopA] = useState(null);
    const [selectedStopB, setSelectedStopB] = useState(null);
    const handleStopAChange = (e) => {
      const selectedStop = locationData.find(loc => loc.name === e.target.value);
        setSelectedStopA(selectedStop);        
    };
    
    const handleStopBChange = (e) => {
        const selectedStop = locationData.find(loc => loc.name === e.target.value);
        setSelectedStopB(selectedStop);        
    };

  return (
      <div className='BusRoute-Navigation-container'>
          <Link to= '/home-map'>
              <FaArrowLeft />
              </Link>
          <div className='location-input-container'> 
            <div className='input-container start'>  
                <MdMyLocation className='start-location'/>
                <select id='start-location' onChange={handleStopAChange} defaultValue="">
                    <option value="" disabled>Select a stop</option>
                    {locationData.map(location => (
                    <option key={location.id} value={location.name}>
                        {location.name}
                    </option>
                    
                    ))}
                </select>
          </div>
        
        <div className='input-container dest'>
          <FaLocationDot className='dest-location'/>
                <select id='dest-location' onChange={handleStopBChange} defaultValue="">
                        <option value="" disabled>Select a stop</option>
                        {locationData.map(location => (
                        <option key={location.id} value={location.name}>
                            {location.name}
                        </option>
                        ))}
                    </select>
            </div>
          </div>
      {selectedStopA && selectedStopB ? 
        (<>
        <MapContainer center={[selectedStopA.latitude, selectedStopA.longitude]} zoom={13} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
          />
          <Routing pointA={selectedStopA} pointB={selectedStopB} />
        </MapContainer>
        
              </>) : (<>
                <MapContainer center={[11.0166292,76.9775246 ]} zoom={10} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
          />
          
        </MapContainer>
              </>)
       }
          {selectedStopA && selectedStopB &&
              <div>
              <h3>Available Buses and Seats</h3>
                  < AvailableBus buslist={buslist} />
                </div>
       }
    </div>
  )
}

export default Map