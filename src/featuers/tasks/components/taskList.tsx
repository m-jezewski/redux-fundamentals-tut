import { shallowEqual, useSelector } from 'react-redux';
import TaskListItem from './taskListItem';
import { selectFitleredTaskIds } from '../tasksSlice';

const TaskList = () => {
  const taskIds = useSelector(selectFitleredTaskIds, shallowEqual);

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
