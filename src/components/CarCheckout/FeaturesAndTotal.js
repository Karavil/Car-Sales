import React from "react";
import { useStore } from "react-redux";

import AdditionalFeatures from "./AdditionalFeatures";
import Total from "./Total";

import styled from "styled-components";
import { Card } from "../../styles/Cards";

const StyledCard = styled(Card)`
   display: flex;
   flex-direction: column;

   justify-content: space-between;
   text-align: right;

   width: 40%;

   ul {
      list-style-type: none;
   }
`;

const FeaturesAndTotal = () => {
   const { car, possibleFeatures } = useStore().getState();

   return (
      <StyledCard>
         <AdditionalFeatures possibleFeatures={possibleFeatures} />
         <Total basePrice={car.basePrice} features={car.features} />
      </StyledCard>
   );
};

export default FeaturesAndTotal;
