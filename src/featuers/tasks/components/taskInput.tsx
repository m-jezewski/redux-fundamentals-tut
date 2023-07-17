import { store } from '../../../store';
import { useState } from 'react';

const TaskInput = () => {
  const [text, setText] = useState('');

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      store.dispatch({ type: 'tasks/taskAdded', payload: text });
      setText('');
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
