import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
   background: url(${props => props.carImage});
   background-size: cover;
   padding: 10px;
   color: white;

   height: 400px;

   display: flex;
   flex-direction: column;
   justify-content: flex-end;
`;
const Header = ({ car }) => {
   console.log("Car (Header)", car);
   return (
      <StyledHeader carImage={car.image}>
         <h2>{car.name}</h2>
         <p>Base Price: ${car.basePrice}</p>
      </StyledHeader>
   );
};

export default Header;
