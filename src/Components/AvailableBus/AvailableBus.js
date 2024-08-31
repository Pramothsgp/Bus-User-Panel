import React, { useState, useEffect } from 'react';
import { db } from '../../Config/Firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { Button, Box } from '@mui/material';
import './AvailableBus.css';
import { Triangle } from 'react-loader-spinner';

const AvailableBus = ({ source,destination }) => {
  const [routes, setRoutes] = useState([]);
  const [bus, setBus] = useState([]);
  const [fetcheddata, setFetchedData] = useState(false);

  const FetchTrips = async () => {
    try {
      const routeIds = routes.map(route => route.Route_id); // Extract Route_id values
      const Trip_fetch = collection(db, "Trip");

      // Query to fetch documents where Route_id matches any value in routeIds
      const q = query(Trip_fetch, where('Route_id', 'in', routeIds));
      const querySnapshot = await getDocs(q);
      setFetchedData(true);
      // Process the fetched documents
      const buss = [];
      querySnapshot.forEach((doc) => {
        buss.push(doc.data().Bus_id);
      });

      console.log("Trips: ", buss);
      setBus(buss);

    } catch (error) {
      console.error("Error fetching trips: ", error);
    }
  };

  const FetchRoutes = async () => {
    try {
      const Routes_fetch = collection(db, "Bus_Route");
      const filtered = await getDocs(Routes_fetch);
      const matchingRoutes = [];

      filtered.docs.forEach((doc) => {
        const data = doc.data();
        if (data.Stop_list.includes(source) && 
            data.Stop_list.includes(destination)) {
          matchingRoutes.push({ Route_id: data.Route_id });
        } 
      });
      console.log(matchingRoutes);
      setRoutes(matchingRoutes); // Update this to use matchingRoutes
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    if (source && destination) {
      setBus([]); // Reset bus list whenever source or destination changes
      FetchRoutes();
    }
  }, [source, destination]);

  useEffect(() => {
    if (routes.length > 0) {
      FetchTrips();
      setFetchedData(false);
    }
  }, [routes]);

  return (
    
    <Box>
      {bus.length > 0 ? (
        <div>
          <h3>Available Buses and Seats</h3>
          {bus.map((busId, index) => (
            <Button
              key={index}
              variant="outlined"
              sx={{ margin: 1 }}
            >
              {busId}
            </Button>
          ))}
          </div>
      ) : (

      <>

      <div className='bus-loader'>
            {fetcheddata ? (< div > There are no buses available.</div>
            ) : (
              <Triangle
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              />
            )}

      </div>
      </>


      )}
    </Box>
  );
};

export default AvailableBus;
