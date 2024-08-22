import React from 'react'
import Map from './Map'

const locationData = [
    { id: "ukd", name: 'ukkadam', latitude: 10.985936, longitude: 76.965408 },
    { id: "kun", name: 'kuniyamuthur', latitude: 10.95262, longitude: 76.9528855 },
    { id: "kvp", name: 'kovaipudur perivu', latitude: 10.93676, longitude: 76.951173 },
    { id: "gnd", name: 'Gandhipuram', latitude: 11.0166292, longitude: 76.9775246 },
    { id: "pap", name: 'Pappanaickenpalayam', latitude: 11.0170942, longitude: 76.9749588 },
    { id: "pel", name: 'Peelamedu', latitude: 11.0237265, longitude: 76.9936103 }
  ];
  const busTicketList = [
    { id: '13A', busNo: 'DL 99 1234', totalticket: 52, hld: true,  bookedticket: 47 ,expense: 4232 },
    { id: '12A', busNo: 'DL 12 4321', totalticket: 52, hld: true,  bookedticket: 24 ,expense: 232 },
    { id: '45C', busNo: 'DL 40 1764', totalticket: 52, hld: true,  bookedticket: 34 ,expense: 4232 },
    { id: '96', busNo: 'DL 40 7675', totalticket: 52, hld: false, bookedticket: 56 , expense: 4232 },
    { id: '3D', busNo: 'DL 36 4325', totalticket: 52, hld: true,  bookedticket: 67 ,expense: 4232 }
]
const UserMap = () => {
    ;
  return (
      <>
          <Map locationData={locationData}  buslist={busTicketList} />
          
      </>
  )
}

export default UserMap