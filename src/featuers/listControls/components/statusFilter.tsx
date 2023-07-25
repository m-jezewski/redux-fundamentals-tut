import { useDispatch } from 'react-redux';
import { filtersStatusUpdated } from '../filtersSlice';
import { filterStatus } from '../../../types/interfaces';

const StatusFilter = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const option = e.target.value as filterStatus;
    dispatch(filtersStatusUpdated(option));
  };

  return (
    <div>
      <h2 className="controls-title">Filter by status</h2>
      <label>
        <input
          type="radio"
          name="status"
          value="All"
          onChange={handleChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="status"
          value="Active"
          onChange={handleChange}
        />
        Active
      </label>
      <label>
        <input
          type="radio"
          name="status"
          value="Completed"
          onChange={handleChange}
        />
        Completed
      </label>
    </div>
  );
};

export default StatusFilter;
