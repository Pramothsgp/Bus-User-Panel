import React from 'react'
import Map from './Map'


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
          <Map/>
          
      </>
  )
}

export default UserMap