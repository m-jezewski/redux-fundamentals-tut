import { useDispatch } from 'react-redux';

const ActionButtons = () => {
  const dispatch = useDispatch();

  const handleMarkAllCompleted = () => {
    dispatch({ type: 'tasks/allCompleted' });
  };

  const handleClearCompleted = () => {
    dispatch({ type: 'tasks/completedCleared' });
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
