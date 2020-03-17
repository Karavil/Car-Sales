import React from "react";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = props => {
   return (
      <div className="content">
         <h4>Additional Features</h4>
         {props.additionalFeatures.length ? (
            <ul>
               {props.additionalFeatures.map(item => (
                  <AdditionalFeature key={item.id} feature={item} />
               ))}
            </ul>
         ) : (
            <p>Nice looking car!</p>
         )}
      </div>
   );
};

export default AdditionalFeatures;
