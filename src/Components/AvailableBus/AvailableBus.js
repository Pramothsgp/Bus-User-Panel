import React, { useState, useEffect } from 'react';
import { db } from '../../Config/Firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { Button, Box } from '@mui/material';
import './AvailableBus.css';

const AvailableBus = ({ AB_id }) => {
  const [routes, setRoutes] = useState([]);
  const [bus, setBus] = useState([]);

  const FetchTrips = async () => {
    try {
      const routeIds = routes.map(route => route.Route_id); // Extract Route_id values
      const Trip_fetch = collection(db, "Trip");

      // Query to fetch documents where Route_id matches any value in routeIds
      const q = query(Trip_fetch, where('Route_id', 'in', routeIds));
      const querySnapshot = await getDocs(q);

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
        if (data.AB_id.includes(AB_id)) {
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
    if (AB_id) {
      setBus([]); // Reset bus list whenever AB_id changes
      FetchRoutes();
    }
  }, [AB_id]);

  useEffect(() => {
    if (routes.length > 0) {
      FetchTrips();
    }
  }, [routes]);

  return (
    <Box>
      {bus.length > 0 ? (
        bus.map((busId, index) => (
          <Button
            key={index}
            variant="outlined"
            sx={{ margin: 1 }}
          >
            {busId}
          </Button>
        ))
      ) : (
        <div>There are no buses available.</div>
      )}
    </Box>
  );
};

export default AvailableBus;
