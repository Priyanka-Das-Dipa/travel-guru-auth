import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import DestinationCard from './DestinationCard';

const Destination = () => {
    const destinations = useLoaderData()
    console.log(destinations)
    return (
        <div>
            <Navbar></Navbar>
            {
                destinations.map(destination => <DestinationCard destinations={destination}></DestinationCard>)
            }
            
        </div>
    );
};

export default Destination;