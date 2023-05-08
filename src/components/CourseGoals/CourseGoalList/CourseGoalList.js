import './CourseGoalList.css';
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = (props) => {
  const {goalList, deleteTodo} = props;

  return (
    <ul className="goal-list">
      {goalList.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          todo={goal}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default CourseGoalList;
