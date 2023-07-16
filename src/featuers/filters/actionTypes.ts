import type { filterStatus, taskColor } from '../../types/interfaces';

interface ActionStatusUpdate {
  type: 'filters/statusFilterUpdated';
  payload: filterStatus;
}

interface ActionColorUpdate {
  type: 'filters/colorFilterUpdated';
  payload: {
    color: taskColor;
    changeType: 'added' | 'removed';
  };
}

type FiltersActions = ActionStatusUpdate | ActionColorUpdate;

export type { FiltersActions };
