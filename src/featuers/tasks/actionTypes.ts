import type { Task, taskColor } from '../../types/interfaces';

interface ActionAdd {
  type: 'tasks/taskAdded';
  payload: { text: string };
}

interface ActionToggle {
  type: 'tasks/taskToggled';
  payload: number; // task.id
}

interface ActionDelete {
  type: 'tasks/taskDelted';
  payload: number; // task.id
}

interface ActionCompleteAll {
  type: 'tasks/allCompleted';
}

interface ActionClearCompleted {
  type: 'tasks/completedCleared';
}

interface ActionColorSelected {
  type: 'tasks/colorSelected';
  payload: {
    taskId: number;
    color: taskColor;
  };
}

interface ActionLoadTasks {
  type: 'tasks/allLoaded';
  payload: Task[];
}

type TasksActions =
  | ActionAdd
  | ActionToggle
  | ActionDelete
  | ActionCompleteAll
  | ActionClearCompleted
  | ActionColorSelected
  | ActionLoadTasks;

export type { TasksActions, ActionAdd, ActionLoadTasks };
