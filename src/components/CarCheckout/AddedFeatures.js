import React from "react";

import AddedFeature from "./AddedFeature";

const AddedFeatures = ({ features }) => {
   return (
      <>
         <h6>Added features:</h6>
         {features.length ? (
            <ol type="1">
               {features.map(item => (
                  <AddedFeature key={item.id} feature={item} />
               ))}
            </ol>
         ) : (
            <p>You can purchase items from the store.</p>
         )}
      </>
   );
};

export default AddedFeatures;
