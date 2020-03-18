import React from "react";

import { useDispatch } from "react-redux";
import { addFeature } from "../../actions/carActions";

import FeatureButton from "../../styles/FeatureButton";
const AdditionalFeature = props => {
   const dispatch = useDispatch();
   return (
      <li>
         {/* Add an onClick that will let you add a feature to your car */}
         {props.feature.name} (+{props.feature.price})
         <FeatureButton
            disabled={props.disabled}
            onClick={() => dispatch(addFeature(props.feature))}
         >
            Add
         </FeatureButton>
      </li>
   );
};

export default AdditionalFeature;
