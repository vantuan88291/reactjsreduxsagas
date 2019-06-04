import React from 'react';
import Home from './Containter/Layout';
import Screen2 from './Containter/Screen2';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/scr2',
        exact : false,
        main : () => <Screen2 />
    }
];

export default routes;