export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

let id = 0;
export const addFeature = featureName => {
   return { type: ADD_FEATURE, payload: { featureName, id: id++ } };
};

export const removeFeature = id => {
   return { type: REMOVE_FEATURE, payload: id };
};
