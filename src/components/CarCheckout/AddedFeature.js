import React from "react";

import { useDispatch } from "react-redux";
import { removeFeature } from "../../actions/carActions";

import FeatureButton from "../../styles/FeatureButton";

const AddedFeature = props => {
   const dispatch = useDispatch();
   return (
      <li>
         {props.feature.name}
         <FeatureButton
            onClick={() => dispatch(removeFeature(props.feature.id))}
         >
            X
         </FeatureButton>
      </li>
   );
};

export default AddedFeature;
