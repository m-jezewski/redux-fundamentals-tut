import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewTask } from '../tasksSlice';
import { AppDispatch } from '../../../store';

const TaskInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setText('');
      dispatch(saveNewTask(text)).catch((error) => {
        console.log(error);
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <input
      value={text}
      onChange={handleChange}
      onKeyDown={handleOnKeyDown}
      className="task-input"
      placeholder="What needs to be done?"
    />
  );
};

export default TaskInput;
