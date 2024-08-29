import React, { useState } from 'react';
import { db } from '../Config/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import ComboBox from '../Components/StopAutoComplete/ComboBox';
import './AddRoute.css'; 

const AddRoute = () => {
  const [Start_stop, setStartValue] = useState({});
  const [End_Stop, setDestValue] = useState({});
  const [Route_id, setId] = useState('');
  const [Stop_num, setNum] = useState(0);
  const [Stop_list, setStop] = useState([]);

  const AddStop = () => {
    const stopId = document.getElementById("stop_id").value;
    if (stopId) {
      setStop(prevList => [...prevList, stopId]);
      document.getElementById("stop_id").value = ''; // Clear input after adding
    }
  };

  const SubmitRoute = async () => {
    try {
      const start_stop = Start_stop.stop_id;
      const end_stop = End_Stop.stop_id;
      const docRef = await addDoc(collection(db, "Bus_Route"), {
        start_stop,
        end_stop,
        Route_id,
        Stop_num: parseInt(Stop_num, 10),
        Stop_list
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("temp_stop");
      console.log(start_stop + " " + end_stop);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const ResetForm = () => {
    setStartValue({});
    setDestValue({});
    setId('');
    setNum(0);
    setStop([]);
  };

  return (
    <div className="emergencyrouting-container">
      <h1>Set Route</h1>
      <ComboBox stopUpdate={setStartValue} label={"Start_Stop"} />
      <br /><br /><br />
      <ComboBox stopUpdate={setDestValue} label={"End_Stop"} />
      <br /><br /><br />
      <label>Route Id</label>
      <input
        type='text'
        value={Route_id}
        onChange={(e) => setId(e.target.value)}
      />
      <br /><br /><br />
      <label>Number of Stops</label>
      <input
        type="number"
        value={Stop_num}
        onChange={(e) => setNum(e.target.value)}
      />
      <br /><br />
      <div>
        <label>Add Stop Id</label>
        <input id='stop_id' type="text" />
        <button onClick={AddStop}>Add</button>
      </div>
      <br />
      <button onClick={SubmitRoute}>Submit</button>
      <button onClick={ResetForm}>Reset</button>
    </div>
  );
}

export default AddRoute;
