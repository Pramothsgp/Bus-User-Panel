import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "./Map.css";
import { MdMyLocation } from "react-icons/md";
import { FaArrowLeft, FaLocationDot } from "react-icons/fa6";
import AvailableBus from "../AvailableBus/AvailableBus";
import { Link } from "react-router-dom";
import ComboBox from "../StopAutoComplete/ComboBox";
import { db } from "../../Config/Firebase";
import { collection, getDocs } from "firebase/firestore";

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
          styles: [{ color: "#3388ff", weight: 5 }],
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

const Map = () => {
  const [selectedStopA, setSelectedStopA] = useState(null);
  const [selectedStopB, setSelectedStopB] = useState(null);

  return (
    <div className="BusRoute-Navigation-container">
      <Link to="/home-map">
        <FaArrowLeft />
      </Link>
      <div className="location-input-container">
        <div className="input-container start">
          <MdMyLocation className="start-location" />
          <ComboBox stopUpdate={setSelectedStopA} label={"Stop A"} />
        </div>

        <div className="input-container dest">
          <FaLocationDot className="dest-location" />
          <ComboBox stopUpdate={setSelectedStopB} label={"Stop B"} />
        </div>
      </div>
      {selectedStopA && selectedStopB ? (
        <>
          <MapContainer
            center={[selectedStopA.latitude, selectedStopA.longitude]}
            zoom={13}
            style={{ height: "70vh", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
            />
            <Routing pointA={selectedStopA} pointB={selectedStopB} />
          </MapContainer>
        </>
      ) : (
        <>
          <MapContainer
            center={[11.0166292, 76.9775246]}
            zoom={10}
            style={{ height: "70vh", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
            />
          </MapContainer>
        </>
      )}
      {selectedStopA && selectedStopB && (
        <div>
          <AvailableBus
            source={selectedStopA.stop_id}
            destination={selectedStopB.stop_id}
          />
        </div>
      )}
    </div>
  );
};

export default Map;
