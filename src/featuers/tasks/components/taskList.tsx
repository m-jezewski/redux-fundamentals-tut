import { useSelector } from 'react-redux';
import { AppState } from '../../../types/interfaces';
import TaskListItem from './taskListItem';

const TaskList = () => {
  const tasks = useSelector((state: AppState) => state.tasks);

  return (
    <div className="task-list">
      {tasks?.map((item) => (
        <TaskListItem
          task={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default TaskList;
