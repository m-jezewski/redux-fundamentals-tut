import { Task, taskColor } from '../../../types/interfaces';
import { store } from '../../../store';
import { useDispatch } from 'react-redux';

interface TaskListItemProps {
  task: Task;
}

const availableColors: taskColor[] = ['Green', 'Blue', 'Orange', 'Purple', 'Red'];

const TaskListItem = ({ task: { completed, id, text, color } }: TaskListItemProps) => {
  const dispatch = useDispatch();

  const handleCompleteChanged = () => {
    dispatch({ type: 'tasks/taskToggled', payload: id });
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = e.target.value as taskColor;
    dispatch({ type: 'tasks/colorSelected', payload: { color: selectedColor, taskId: id } });
  };

  const handleDelete = () => {
    dispatch({ type: 'tasks/taskDelted', payload: id });
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={completed}
        className="task-toggle-checkbox"
        onChange={handleCompleteChanged}
      />
      <p className="task-text">{text}</p>
      <select
        className="color-picker"
        value={color}
        style={{ color, borderColor: color }}
        onChange={handleColorChange}
      >
        <option value=""></option>
        {availableColors.map((color) => (
          <option
            key={color}
            value={color}
            style={{ color }}
          >
            {color}
          </option>
        ))}
      </select>
      <button
        className="task-remove-btn"
        onClick={handleDelete}
      >
        X
      </button>
    </div>
  );
};

export default TaskListItem;
