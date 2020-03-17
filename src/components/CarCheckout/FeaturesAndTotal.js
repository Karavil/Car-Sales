import React from "react";

import AdditionalFeatures from "./AdditionalFeatures";
import Total from "./Total";

import styled from "styled-components";
import { Card } from "../../styles/Cards;";

const StyledCard = styled(Card)`
   display: flex;
   flex-direction: column;

   justify-content: space-between;
   text-align: right;

   ul {
      list-style-type: none;
   }
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
