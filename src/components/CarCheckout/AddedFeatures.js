import React from "react";
import styled from "styled-components";

import AddedFeature from "./AddedFeature";

const StyledFeatures = styled.div`
   padding: 10px;
`;

const AddedFeatures = ({ features }) => {
   return (
      <StyledFeatures>
         <h6>Added features:</h6>
         {features.length ? (
            <ol type="1">
               {features.map(item => (
                  <AddedFeature key={item.id} feature={item} />
               ))}
            </ol>
         ) : (
            <p>No additional features.</p>
         )}
      </StyledFeatures>
   );
};

export default AddedFeatures;
