import React from "react";

const Header = props => {
   return (
      <>
         <img src={props.car.image} alt={props.car.name} />
         <h2>{props.car.name}</h2>
         <p>Amount: ${props.car.price}</p>
      </>
   );
};

export default Header;
