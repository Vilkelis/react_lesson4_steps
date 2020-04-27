import React from 'react';
import PropTypes from 'prop-types';
import WorkoutModel from '../models/WorkoutModel';
 
function StepsListItem(props) {
  
  const {workout, deleteWorkoutHandler} = props;

  const handleDelete = evt => {
    evt.preventDefault();
    deleteWorkoutHandler(workout);
  }

  const formatDate = (date) => {
    return date.getDate().toString().padStart(2,'0') + '.' +
           (date.getMonth() + 1).toString().padStart(2,'0') + '.' +
           date.getFullYear().toString().padStart(4,'0');
  }

  return (
    <React.Fragment>
      <tr>
        <td>{formatDate(workout.date)}</td>
        <td>{workout.distance}</td>
        <td><a href="/" onClick={handleDelete}>✘</a></td>
      </tr>
    </React.Fragment>
  );
}

StepsListItem.propTypes = {
  workout: PropTypes.instanceOf(WorkoutModel).isRequired,
  deleteWorkoutHandler: PropTypes.func.isRequired
}

export default StepsListItem;