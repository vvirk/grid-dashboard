import './Grid.css';
import { useGrid } from '../../context/GridContext';
import { Block } from '../Block/Block';

export function Grid() {
  const { grid } = useGrid();

  return (
    <div className="grid">
      {grid.map((cell, index) => (
        <div key={index} className="grid__cell">
          {cell ? <Block block={cell} /> : null}
        </div>
      ))}
    </div>
  );
}