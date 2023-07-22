import { shallowEqual, useSelector } from 'react-redux';
import { AppState } from '../../../types/interfaces';
import TaskListItem from './taskListItem';

const TaskList = () => {
  const taskIds = useSelector((state: AppState) => state.tasks?.map((task) => task.id), shallowEqual);

  return (
    <div className="task-list">
      {taskIds?.map((taskId) => (
        <TaskListItem
          id={taskId}
          key={taskId}
        />
      ))}
    </div>
  );
};

export default TaskList;
