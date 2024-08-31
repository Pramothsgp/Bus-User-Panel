import React from 'react';
import './AvailHLPBuses.css';

const busTicketList = [
    { id: '13A', busNo: 'DL 99 1234', totalticket: 52, hld: true,  bookedticket: 47, expense: 4232 },
    { id: '96', busNo: 'DL 40 7675', totalticket: 52, hld: false, bookedticket: 56, expense: 4232 },
    { id: '12A', busNo: 'DL 12 4321', totalticket: 52, hld: true,  bookedticket: 24, expense: 232 },
    { id: '45C', busNo: 'DL 40 1764', totalticket: 52, hld: true,  bookedticket: 34, expense: 4232 },
    { id: '3D', busNo: 'DL 36 4325', totalticket: 52, hld: true,  bookedticket: 67, expense: 4232 }
];

const AvailHLPBus = ({ handleBus }) => {
  return (
    <div>
      <div className='AvailableHlpBus-Container'>
        {
          busTicketList.map((bl) => (
            <div className='Available-Hlp-bus' key={bl.id}>
              <button
                style={{ backgroundColor: (bl.totalticket > bl.bookedticket) ? 'lightgreen' : 'red', color: 'white' }}
                onClick={() => handleBus(bl.id)} // Updated to use an anonymous function
              >
                {bl.id}{bl.hld}
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AvailHLPBus;
