import React from "react";
import styled from "styled-components";

import AddedFeature from "./AddedFeature";

const StyledFeatures = styled.div`
   padding: 10px;

   li {
      list-style-type: none;
   }
`;

const AddedFeatures = ({ features }) => {
   return (
      <StyledFeatures>
         <h6>Added features:</h6>
         {features.length ? (
            <>
               {features.map(item => (
                  <AddedFeature key={item.id} feature={item} />
               ))}
            </>
         ) : (
            <p>No features added, please purchase them from the store.</p>
         )}
      </StyledFeatures>
   );
};

export default AddedFeatures;
