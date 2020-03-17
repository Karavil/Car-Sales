import React from "react";

const Header = ({ car }) => {
   console.log("Car (Header)", car);
   return (
      <>
         <img src={car.image} alt={car.name} />
         <h2>{car.name}</h2>
         <p>Amount: ${car.basePrice}</p>
      </>
   );
};

export default Header;
