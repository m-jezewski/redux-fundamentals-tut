import type { FiltersActions } from '../featuers/listControls/actionTypes';
import type { TasksActions } from '../featuers/tasks/actionTypes';

type taskColor = 'Green' | 'Blue' | 'Orange' | 'Purple' | 'Red';

type filterStatus = 'All' | 'Active' | 'Completed';

type AnyAction = TasksActions | FiltersActions;

interface Task {
  id: number;
  text: string;
  completed: boolean;
  color?: taskColor;
}

interface AppState {
  tasks?: { id: number; text: string; completed: boolean; color?: taskColor }[];
  filters?: { status: filterStatus; colors: taskColor[] };
}

export type { Task, taskColor, filterStatus, AnyAction, AppState };
