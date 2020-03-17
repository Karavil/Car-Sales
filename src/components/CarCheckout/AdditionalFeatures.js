import React from "react";
import AdditionalFeature from "./AdditionalFeature";

import { useSelector } from "react-redux";
const AdditionalFeatures = ({ possibleFeatures }) => {
   const currentFeatures = useSelector(state => state.car.features);

   const featureList = possibleFeatures.map(feature => {
      const isAlreadyAdded = currentFeatures.includes(feature);
      return (
         <AdditionalFeature
            disabled={isAlreadyAdded}
            key={feature.id}
            feature={feature}
         />
      );
   });

   return (
      <div>
         <h4>Additional Features</h4>
         {possibleFeatures.length ? (
            <ul>{featureList}</ul>
         ) : (
            <p>No additional features available for this car. :(</p>
         )}
      </div>
   );
};

export default AdditionalFeatures;
