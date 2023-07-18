import { useState } from 'react';

const StatusFilter = () => {
  const [filterStatus, setFilterStatus] = useState('All');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterStatus(e.target.value);
  };

  return (
    <div>
      <h2 className="controls-title">Filter by status</h2>
      <label>
        <input
          type="radio"
          name="status"
          value="All"
          checked={filterStatus === 'All'}
          onChange={handleChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="status"
          value="Active"
          checked={filterStatus === 'Active'}
          onChange={handleChange}
        />
        Active
      </label>
      <label>
        <input
          type="radio"
          name="status"
          value="Completed"
          checked={filterStatus === 'Completed'}
          onChange={handleChange}
        />
        Completed
      </label>
    </div>
  );
};

export default StatusFilter;
