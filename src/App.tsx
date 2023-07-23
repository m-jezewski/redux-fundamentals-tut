import ActionButtons from './featuers/listControls/components/actionButtons';
import ColorFilter from './featuers/listControls/components/colorFilter';
import StatusFilter from './featuers/listControls/components/statusFilter';
import RemianingTasks from './featuers/listControls/components/remianingTasks';
import TaskInput from './featuers/tasks/components/taskInput';
import TaskList from './featuers/tasks/components/taskList';
import { fetchTasks } from './featuers/tasks/tasksSlice';
import { store } from './store';

const App = () => {
  store.dispatch(fetchTasks as any);

  return (
    <div className="App">
      <TaskInput />
      <TaskList />
      <div className="controls-wrapper">
        <ActionButtons />
        <RemianingTasks />
        <StatusFilter />
        <ColorFilter />
      </div>
    </div>
  );
};

export default App;
