import React from 'react';
import { useSelector } from 'react-redux'
import AddedFeature from './AddedFeature';

const AddedFeatures = () => {

  const car = useSelector(state => state.car)

  return (

    <div className="content">

      <h6>Added features:</h6>

      {car.features.length ? (

        <p>You can purchase items from the store.</p>

      ) : (

          <ol type="1">

            {car.features.map(item => (

              <AddedFeature 
                key={item.id} 
                feature={item} 
              />

            ))}

          </ol>

        )}

    </div>

  );
  
};

export default AddedFeatures;
