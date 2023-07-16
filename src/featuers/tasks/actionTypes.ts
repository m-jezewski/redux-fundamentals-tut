import type { taskColor } from '../../types/interfaces';

interface ActionAdd {
  type: 'tasks/taskAdded';
  payload: string;
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

type TasksActions =
  | ActionAdd
  | ActionToggle
  | ActionDelete
  | ActionCompleteAll
  | ActionClearCompleted
  | ActionColorSelected;

export type { TasksActions };
