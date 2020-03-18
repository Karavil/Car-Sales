import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import Header from "./Header";
import AddedFeatures from "./AddedFeatures";

import styled from "styled-components";
import { Card } from "../../styles/Cards";

const StyledCard = styled(Card)`
   display: flex;
   flex-direction: column;
   width: 64.5%;

   padding: 0;
`;

const FeaturesAndTotal = () => {
   const car = useSelector(state => state.car, shallowEqual);

   return (
      <StyledCard>
         <Header car={car} />
         <AddedFeatures features={car.features} />
      </StyledCard>
   );
};

export default FeaturesAndTotal;
