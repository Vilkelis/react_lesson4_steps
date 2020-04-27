import React from 'react';
import StepsForm from './StepsForm';
import StepsList from './StepsList';
 
function Steps() {

  const [workouts, setWorkouts] = React.useState([]);
  
  const addWorkoutHandler = (workout) => {               
    const el = workouts.find( item => item.date.toString() === workout.date.toString() );     
    if ( !el ) {
      setWorkouts(prevWorkouts => [...prevWorkouts, workout].sort(workoutCompare));  
    } else {
      workout.distance += el.distance;      
      setWorkouts(prevWorkouts => prevWorkouts.map( o => o === el ? workout : o) );
    }    
  };
 
  const workoutCompare = (a, b) => {     
    if (a.date > b.date) return -1; 
    if (a.date === b.date) return 0; 
    if (a.date < b.date) return 1;  
  }

  const deleteWorkoutHandler = (workout) => {
    setWorkouts(prevWorkouts => prevWorkouts.filter( o => o.id !== workout.id ));    
  };

  return (
    <div className="Steps">
      <div className="Steps__container">
        <StepsForm addWorkoutHandler={addWorkoutHandler} />
        <StepsList workoutList={workouts} deleteWorkoutHandler={deleteWorkoutHandler} />
      </div>
    </div>
  );
}

export default Steps;