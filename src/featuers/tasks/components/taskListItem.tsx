import { AppState, Task, taskColor } from '../../../types/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { taskColorChanged, taskDeleted, taskToggled } from '../tasksSlice';

interface TaskListItemProps {
  id: number;
}

const availableColors: taskColor[] = ['Green', 'Blue', 'Orange', 'Purple', 'Red'];

const TaskListItem = ({ id }: TaskListItemProps) => {
  const { text, completed, color } = useSelector((state: AppState) => state.tasks?.find((task) => task.id === id))!;

  const dispatch = useDispatch();
  const handleCompleteChanged = () => {
    dispatch(taskToggled(id));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = e.target.value as taskColor;
    dispatch(taskColorChanged(id, selectedColor));
  };

  const handleDelete = () => {
    dispatch(taskDeleted(id));
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
