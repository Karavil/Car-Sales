import React from "react";

import FeatureButton from "../../styles/FeatureButton";

const AdditionalFeature = props => {
   return (
      <li>
         {/* Add an onClick that will let you add a feature to your car */}
         {props.feature.name} (+{props.feature.price})
         <FeatureButton>Add</FeatureButton>
      </li>
   );
};

export default AdditionalFeature;
