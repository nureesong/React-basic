import './CourseInput.css';
import Button from "../../UI/Button/Button";
import {useCallback, useRef, useState} from "react";

const CourseInput = (props) => {
  const {addTodo} = props;
  const todoRef = useRef(null);
  const [isValid, setIsValid] = useState(true);

  let text = '';
  const inputChangeHandler = (evt) => {
    text = evt.target.value;
  }

  const sendData = (evt) => {
    evt.preventDefault();

    if (text.trim() === '') {
      setIsValid(false);
    }else {
      setIsValid(true);
      addTodo(text);
    }
    todoRef.current.value = '';
    todoRef.current.focus();
  };

  return (
    <form>
      {/*<div className="form-control invalid">*/}
      <div className={`form-control ${!isValid ? 'invalid' : ''}`} >
        <label>Course Goal</label>
        <input type="text" ref={todoRef} onChange={inputChangeHandler} />
      </div>
      <Button type="submit" onClick={sendData}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
