import React, {useState, useRef, useCallback} from 'react';

import './App.css';
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

const App = () => {
  // [getter, setter] = useState(상태의 기본값)
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  //===========================================
  const goalId = useRef(3);

  const addTodo = useCallback((text) => {
    const todo = {
      text: text,
      id: 'g' + goalId.current++
    };
    setCourseGoals((courseGoals) => [todo, ...courseGoals]);
  }, []);

  const deleteTodo = useCallback((id) => {
    setCourseGoals((courseGoals) => courseGoals.filter(todo => todo.id !== id))
  }, []);
  //==========================================

  return (
    <div>
      <section id="goal-form">
        <CourseInput addTodo={addTodo}/>
      </section>
      <section id="goals">
	      <CourseGoalList goalList={courseGoals} deleteTodo={deleteTodo}/>
      </section>
    </div>
  );
};

export default App;
