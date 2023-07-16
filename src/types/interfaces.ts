type taskColor = 'Green' | 'Blue' | 'Orange' | 'Purple' | 'Red';

type filterStatus = 'All' | 'Active' | 'Completed';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  color?: taskColor;
}

export type { Task, taskColor, filterStatus };
