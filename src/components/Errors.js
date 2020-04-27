import React from 'react';
import PropTypes from 'prop-types';
 
function Errors(props) {

  const {errors} = props;
       
  if (errors.length > 0) {
    return (
      <div className="Errors">
        <ul>
          {errors.map( (e,index) => <li key={index}>{e}</li> )}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

Errors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired 
}

export default Errors;