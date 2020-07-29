// Refactorization in progress
import React from "react";
import { deleteFeature } from "../actions/actions";
//import { useSelector, useDispatch } from 'react-redux' 
import useActions from "../hooks/hooked";

const AddedFeature = React.memo(props => {

  //const features = useSelector(state => state.car.features)
  //const dispatch = useDispatch()
  const deLete = useActions(deleteFeature, props.feature);

  return (

    <li>

      <button
      
        className="button"
        id={props.id}
        onClick={deLete}

      >X</button>

      {props.feature}

    </li>

  );
  
});

export default AddedFeature;
