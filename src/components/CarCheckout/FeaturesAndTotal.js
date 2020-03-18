import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import AdditionalFeatures from "./AdditionalFeatures";
import Total from "./Total";

import styled from "styled-components";
import { Card } from "../../styles/Cards";

const StyledCard = styled(Card)`
   display: flex;
   flex-direction: column;

   justify-content: space-between;
   text-align: right;

   width: auto;

   ul {
      list-style-type: none;
   }
`;

const FeaturesAndTotal = () => {
   const { car, possibleFeatures } = useSelector(state => state, shallowEqual);

   return (
      <StyledCard>
         <AdditionalFeatures possibleFeatures={possibleFeatures} />
         <Total basePrice={car.basePrice} features={car.features} />
      </StyledCard>
   );
};

export default FeaturesAndTotal;
