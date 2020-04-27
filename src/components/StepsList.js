import React from 'react';
import PropTypes from 'prop-types';
import StepsListItem from './StepsListItem';
import WorkoutModel from '../models/WorkoutModel';
 
function StepsList(props) {

  const {workoutList, deleteWorkoutHandler} = props;
     
  return (
    <div className="StepsList">
      <table>
        <thead>
          <tr>
            <th>Дата (ДД.ММ.ГГГГ)</th>
            <th>Пройдено км.</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {workoutList.map( (workout) => <StepsListItem key={workout.id} 
                                                        workout={workout} 
                                                        deleteWorkoutHandler={deleteWorkoutHandler} />)}                    
        </tbody>
      </table>
    </div>
  );
}

StepsList.propTypes = {
  workoutList: PropTypes.arrayOf(PropTypes.instanceOf(WorkoutModel)).isRequired,
  deleteWorkoutHandler: PropTypes.func.isRequired
}

export default StepsList;