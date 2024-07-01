import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import SingleProducts from './pages/home/SingleProducts';
import Jewelry from './pages/jewelry/Jewelry';
import JewelryProducts from './pages/jewelry/JewelryProducts';
//import Login from './pages/home/Login';
import Clothing from './pages/clothing/Clothing';
import House from './pages/house/House';
import Party from './pages/party/Party';
import Toys from './pages/toys/Toys';
import Arts from './pages/arts/Arts';
import Craft from './pages/craft/Craft';
import ClothingProducts from './pages/clothing/ClothingProducts';
import HouseProducts from './pages/house/HouseProducts';
import PartyProducts from './pages/party/PartyProducts';
import ToysProducts from './pages/toys/ToysProducts';
import ArtsProducts from './pages/arts/ArtsProducts';
import CraftProducts from './pages/craft/CraftProducts';


const router = createBrowserRouter([

  
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
      
      },

      {
        path: "/shop/:id",
        element: <SingleProducts/>
      },
      {
        path: "/jewelry",
        element: <Jewelry/>
      },
      {
        path: "/jewelryshop/:id",
        element: <JewelryProducts/>
      },
      {
       path: "/cloths",
       element: <Clothing/>
      },
      {
         path: "/clotheshop/:id",
         element: <ClothingProducts/>
      },
      {
        path: "/house",
        element: <House/>
      },
      {
        path: "/houseshop/:id",
        element: <HouseProducts/>
      },
      {
        path: "/party",
        element: <Party/>
      },
      {
        path: "/partyshop/:id",
        element: <PartyProducts/>
      },
      {
        path: "toys",
        element: <Toys/>
      },
      {
        path: "/toysshop/:id",
        element: <ToysProducts/>
      },
      {
        path: "arts",
        element: <Arts/>
      },
      {
        path: "/artsshop/:id",
        element: <ArtsProducts/>
      },
      {
        path: "craft",
        element: <Craft/>
      },
      {
        path: "/craftshop",
        element: <CraftProducts/>
      }
        ],
        

        
        
  },
  
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);


