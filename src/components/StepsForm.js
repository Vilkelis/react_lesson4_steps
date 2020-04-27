import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import WorkoutModel from '../models/WorkoutModel';
import Errors from './Errors';
 
function StepsForm(props) {

  const {addWorkoutHandler} = props;
  const emptyWorkout = {date:'', distance: ''} 

  const [form, setForm] = React.useState(emptyWorkout);
  const [errors, setErrors] = React.useState([]);

  const handleSubmit = evt => {
    evt.preventDefault();
    let errs = [];
    
    const dateParse = Date.parse(form.date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));      
    const dateMatch = form.date.match(/(\d+).(\d+).(\d+)/);
    if ( !dateParse || !dateMatch ) {
      errs.push('Не корректный формат даты');
    }      
    if (Number.parseInt(form.distance) <= 0) {
      errs.push('Дистанция должна быть > 0');
    }
    setErrors(errs);
    
    if ( errs.length === 0 ) {       
      const date = new Date(form.date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
      const workout = new WorkoutModel(nanoid(), date, Number.parseInt(form.distance));    
      addWorkoutHandler(workout);              
      setForm(emptyWorkout);      
    }
  };
 
  const handleChange = ({target}) => {
    const name = target.name;
    const value = target.value; 
    setForm(prevForm => ({...prevForm, [name]: value}));
  }  

  return (
    <React.Fragment>
      <Errors errors={errors} />
      <form className="StepsForm" onSubmit={handleSubmit}>      
        <div className="control">
          <label htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
          <input type="text" 
                placeholder="ДД.ММ.ГГГГ" 
                id="date" 
                name="date"
                value={form.date} 
                onChange={handleChange} />
        </div>
        <div className="control">
          <label htmlFor="distance">Пройдено км.</label>
          <input type="number" 
                id="distance" 
                name="distance" 
                value={form.distance} 
                onChange={handleChange} />
        </div> 
        <div className="control">
          <button type="submit">OK</button>
        </div>
      </form>
    </React.Fragment>
  );
}

StepsForm.propTypes = {
  addWorkoutHandler: PropTypes.func
}

export default StepsForm;