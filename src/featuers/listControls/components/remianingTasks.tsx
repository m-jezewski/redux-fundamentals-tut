import { useSelector } from 'react-redux';
import { AppState } from '../../../types/interfaces';

const RemianingTasks = () => {
  const tasksRemaining = useSelector((state: AppState) => {
    return state.tasks?.filter((task) => !task.completed).length;
  });

  return (
    <div>
      <h2 className="controls-title">Remaining Tasks</h2>
      <span>{tasksRemaining} tasks uncompleted</span>
    </div>
  );
};

export default RemianingTasks;
