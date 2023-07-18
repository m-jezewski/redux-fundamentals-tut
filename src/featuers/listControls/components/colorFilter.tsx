import { taskColor } from '../../../types/interfaces';

const availableColors: taskColor[] = ['Green', 'Blue', 'Orange', 'Purple', 'Red'];

const ColorFilter = () => {
  return (
    <div>
      <h2 className="controls-title">Filter by color</h2>
      {availableColors.map((color) => (
        <div key={color}>
          <input
            type="checkbox"
            name="color"
            key={color}
            style={{ color }}
          />
          <span style={{ color, marginLeft: '0.25rem' }}>{color}</span>
        </div>
      ))}
    </div>
  );
};

export default ColorFilter;
