export const ADD_FEATURE = 'ADD_FEATURE';
export const DELETE_FEATURE = 'DELETE_FEATURE';

export const addFeature = (item) => ({



    type: ADD_FEATURE,
    payload: item



});

export const deleteFeature = (item) => ({



    type: DELETE_FEATURE,
    payload: item


  
});
