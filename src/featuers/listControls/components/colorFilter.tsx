import { useDispatch } from 'react-redux';
import { taskColor } from '../../../types/interfaces';
import { filtersColorFilterUpdated } from '../filtersSlice';

const ColorFilter = () => {
  const availableColors: taskColor[] = ['Green', 'Blue', 'Orange', 'Purple', 'Red'];
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = availableColors.find((color) => color === e.target.value);

    if (!color) return;

    if (e.target.checked) {
      dispatch(filtersColorFilterUpdated(color, 'add'));
    } else {
      dispatch(filtersColorFilterUpdated(color, 'remove'));
    }
  };

  return (
    <div>
      <h2 className="controls-title">Filter by color</h2>
      {availableColors.map((color) => (
        <div key={color}>
          <input
            type="checkbox"
            name="color"
            value={color}
            key={color}
            style={{ color }}
            onChange={handleChange}
          />
          <span style={{ color, marginLeft: '0.25rem' }}>{color}</span>
        </div>
      ))}
    </div>
  );
};

export default ColorFilter;
