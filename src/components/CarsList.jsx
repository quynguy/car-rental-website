import React from 'react';
import MainContainer from './MainContainer';
import { Card } from 'antd';

const CarsList = () => {
    const cars = [
        {
            name: 'Honda Odyssey',
            type: 'Van',
            year: '2019',
            mileage: '28 MPG',
            passengers: '7',
            price: '120/Day',
        },
        {
            name: 'Toyota Sienna',
            type: 'Van',
            year: '2019',
            mileage: '27 MPG',
            passengers: '8',
            price: '120/Day',
        },
        {
            name: 'Chrysler Pacifica',
            type: 'Van',
            year: '2019',
            mileage: '30 MPG',
            passengers: '7',
            price: '120/Day',
        },
        {
            name: 'Kia Sedona',
            type: 'Van',
            year: '2019',
            mileage: '26 MPG',
            passengers: '8',
            price: '120/Day',
        },
        {
            name: 'Nissan Quest',
            type: 'Van',
            year: '2019',
            mileage: '25 MPG',
            passengers: '7',
            price: '120/Day',
        },
    ];

  return (
    <div>
        {cars.map((car, index) => (
             <Card
             key={index}
             title={cars.name}
             bordered={false}
             style={{
               width: 300,
             }}
           >
             <p>Model: {car.name}</p>
             <p>Type: {car.type}</p>
             <p>Mileage: {car.mileage}</p>
             <p>Passengers: {car.passengers}</p>
             <p>Rental Fee: {car.price}</p>
           </Card>
        ))}
    </div>
  
  );
};

export default CarsList;