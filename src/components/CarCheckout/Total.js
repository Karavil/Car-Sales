import React from "react";

const Total = ({ basePrice, features }) => {
   let featuresCost = 0;
   features.forEach(feature => (featuresCost += feature.price));
   return <h4>Total Amount: ${basePrice + featuresCost}</h4>;
};

export default Total;
