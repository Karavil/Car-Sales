import React from "react";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = ({ possibleFeatures }) => {
   return (
      <>
         <h4>Additional Features</h4>
         {possibleFeatures.length ? (
            <ul>
               {possibleFeatures.map(item => (
                  <AdditionalFeature key={item.id} feature={item} />
               ))}
            </ul>
         ) : (
            <p>Nice looking car!</p>
         )}
      </>
   );
};

export default AdditionalFeatures;
