import React from "react";

import styled, { createGlobalStyle } from "styled-components";
import { Card } from "./styles/Cards";

import CarInfo from "./components/CarCheckout/CarInfo";
import FeaturesAndTotal from "./components/CarCheckout/FeaturesAndTotal";

const GlobalStyle = createGlobalStyle`

   * {
      box-sizing: border-box;
      max-width: 100%;
      margin: 0;

      font-family: 'Oswald', sans-serif;
      font-size: 1.1rem;
      letter-spacing: 0.02rem;
   }

   body {
      margin: 0;
      min-height: 100vh;
      background: black;
   }

   h1 {
      font-size: 3.5rem;
   }

   h2 {
      font-size: 2.5rem;
   }

   h3 {
      font-size: 1.75rem;
   }
   h4 {
      font-size: 1.75rem;
   }

`;

const CarContainer = styled(Card)`
   display: flex;
   flex-wrap: wrap;
`;

const App = () => {
   const state = {
      additionalPrice: 0,
      car: {
         price: 26395,
         name: "2019 Ford Mustang",
         image:
            "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
         features: []
      },
      additionalFeatures: [
         { id: 1, name: "V-6 engine", price: 1500 },
         { id: 2, name: "Racing detail package", price: 1500 },
         { id: 3, name: "Premium sound system", price: 500 },
         { id: 4, name: "Rear spoiler", price: 250 }
      ]
   };

   const removeFeature = item => {
      // dispatch an action here to remove an item
   };

   const buyItem = item => {
      // dipsatch an action here to add an item
   };

   return (
      <>
         <GlobalStyle />
         <CarContainer>
            <CarInfo />
            <FeaturesAndTotal />
         </CarContainer>
      </>
   );
};

export default App;
