import React from "react";
//import { useSelector } from 'react-redux';
import { connect } from "react-redux";

const Total = props => {

  //const price = useSelector(state => state.car.price)

  return (

    <div className="content">

      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>

    </div>

  );
  
};

//export default Total;

export default connect(state => ({
  car: state.car,
  additionalPrice: state.additionalPrice
}))(Total);
