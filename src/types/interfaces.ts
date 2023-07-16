import type { FiltersActions } from '../featuers/filters/actionTypes';
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

export type { Task, taskColor, filterStatus, AnyAction };
