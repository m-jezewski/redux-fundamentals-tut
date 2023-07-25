type taskColor = 'Green' | 'Blue' | 'Orange' | 'Purple' | 'Red';

type filterStatus = 'All' | 'Active' | 'Completed';

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

export type { Task, taskColor, filterStatus, AppState };
