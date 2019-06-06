import React from 'react';
import Home from './Containter/Home/HomeScreen';
import DetailScreen from './Containter/Detail/DetailScreen';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/Detail',
        exact : false,
        main : () => <DetailScreen />
    }
];

export default routes;