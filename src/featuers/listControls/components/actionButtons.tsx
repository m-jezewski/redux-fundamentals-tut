import { useDispatch } from 'react-redux';
import { taskAllCompleted, taskCompletedCleared } from '../../tasks/tasksSlice';

const ActionButtons = () => {
  const dispatch = useDispatch();

  const handleMarkAllCompleted = () => {
    dispatch(taskAllCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(taskCompletedCleared());
  };

  return (
    <div>
      <h2 className="controls-title">Actions</h2>
      <button
        className="controls-actions-btn"
        onClick={handleMarkAllCompleted}
      >
        Mark All Completed
      </button>
      <button
        className="controls-actions-btn"
        onClick={handleClearCompleted}
      >
        Clear All Completed
      </button>
    </div>
  );
};

export default ActionButtons;
