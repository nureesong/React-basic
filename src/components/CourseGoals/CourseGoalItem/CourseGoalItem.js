import './CourseGoalItem.css';

const CourseGoalItem = (props) => {
  const {todo, deleteTodo} = props;
  // 이벤트 함수에 파라미터가 있는 경우에  () =>  써줘야 함!!!
  return (
    <li className="goal-item" onClick={() => deleteTodo(todo.id)}>{todo.text}</li>
  );
};

export default CourseGoalItem;
