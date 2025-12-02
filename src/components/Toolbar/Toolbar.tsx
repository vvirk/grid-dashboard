import './Toolbar.css';
import { useGrid } from '../../context/GridContext';
import type { BlockType } from '../../types/block';

export function Toolbar() {
  const { addBlock } = useGrid();

  const handleAdd =
    (type: BlockType) =>
    () => {
      addBlock(type);
    };

  return (
    <div className="toolbar">
      <button className="toolbar__button" onClick={handleAdd('line')}>
        Add Line Chart
      </button>
      <button className="toolbar__button" onClick={handleAdd('bar')}>
        Add Bar Chart
      </button>
      <button className="toolbar__button" onClick={handleAdd('text')}>
        Add Text Block
      </button>
    </div>
  );
}