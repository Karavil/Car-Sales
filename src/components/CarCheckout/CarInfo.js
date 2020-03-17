import React from "react";

import AdditionalFeatures from "./AdditionalFeatures";
import Total from "./Total";

import styled from "styled-components";
import { Card } from "../../styles/Cards;";

const StyledCard = styled(Card)`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   margin: 0 auto;

   width: 70%;

   padding: 100px 0;
`;

const FeaturesAndTotal = () => {
   return (
      <StyledCard>
         <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
         <Total car={state.car} additionalPrice={state.additionalPrice} />
      </StyledCard>
   );
};

export default FeaturesAndTotal;
