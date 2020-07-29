import React from "react";
//import { useSelector, useDispatch } from "react-redux";
import { addFeature } from "../actions/actions";
import useActions from "../hooks/hooked";

const AdditionalFeature = props => {

  //const features = useSelector(state => state.additionalFeatures)
  //const dispatch = useDispatch();
  const add = useActions(addFeature, props.feature);

  return (

    <>

        return (

          <li>

            <button

              className="button"
              id={props.feature.id}
              onClick={add}

            >
              
              Add
            
            </button>

            {props.feature.name} (+{props.feature.price})

          </li>

        );

    </>

  );
  
};

export default AdditionalFeature
