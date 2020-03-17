import React from "react";

import FeatureButton from "../../styles/FeatureButton";

const AddedFeature = props => {
   return (
      <li>
         {props.feature.name}
         <FeatureButton>X</FeatureButton>
      </li>
   );
};

export default AddedFeature;
