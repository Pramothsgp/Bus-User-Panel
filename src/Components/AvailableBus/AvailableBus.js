import React from 'react'

import './AvailableBus.css'
const AvailableBus = ({buslist}) => {
  return (
    <div className='Availablebus-Container'>
        {
              buslist.map((bl) => (
                        <div className='Available-bus'>
                      <button style={{ backgroundColor: (bl.totalticket > bl.bookedticket) ? 'green' : 'red', color: 'white' }}>{bl.id}{bl.hld}</button>
                      <span>{bl.totalticket-bl.bookedticket}</span>
                        </div>
                    ))
                }
    </div>
  )
}

export default AvailableBus