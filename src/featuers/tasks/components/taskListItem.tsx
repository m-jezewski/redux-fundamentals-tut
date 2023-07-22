import { AppState, Task, taskColor } from '../../../types/interfaces';
import { useDispatch, useSelector } from 'react-redux';

interface TaskListItemProps {
  id: number;
}

const availableColors: taskColor[] = ['Green', 'Blue', 'Orange', 'Purple', 'Red'];

const TaskListItem = ({ id }: TaskListItemProps) => {
  const task = useSelector((state: AppState) => state.tasks?.find((task) => task.id === id))!;
  const { text, completed, color } = task;

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
